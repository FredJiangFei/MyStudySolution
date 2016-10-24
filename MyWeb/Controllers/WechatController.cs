using System;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Security;
using MyWeb.Model;
using MyWeb.Tool;

namespace MyWeb.Controllers
{
    [RoutePrefix("api")]
    public class WechatController : ApiController
    {
        public readonly string Token = "xiaoduan123";

        [HttpPost]
        [Route("ValidateToken")]
        public HttpResponseMessage ReceiveMessage()
        {
            var message = Request.Content.ReadAsStringAsync().Result;

            var wechat = XmlUtil.Deserialize(typeof(Wechat), message) as Wechat;
            var toUserName = wechat.ToUserName;
            var fromUserName = wechat.FromUserName;
            var msgType = wechat.MsgType;
            var content = wechat.Content;

            switch (msgType)
            {
                case "text":
                    {
                        var returnMessage = content;
                        var sendMessage = GetSendMessage(fromUserName, returnMessage, toUserName);
                        return GetReturn(sendMessage);
                    }
                case "event":
                    {
                        var eventStr = wechat.Event;
                        if (eventStr == "subscribe")
                        {
                            var returnMessage = "欢迎关注**账号 [微笑]";
                            var sendMessage = GetSendMessage(fromUserName, returnMessage, toUserName);
                            return GetReturn(sendMessage);
                        }
                        return GetReturn("error");
                    }
                case "image":
                {
                    //var sendMessage = GetSendMessage(fromUserName, wechat.MediaId, toUserName);
                    var createTime = ConvertDateTimeInt(DateTime.Now);

                    var sendMessage = string.Format(@"<xml>
                                                <ToUserName><![CDATA[{0}]]></ToUserName>
                                                <FromUserName><![CDATA[{1}]]></FromUserName>
                                                <CreateTime>{2}</CreateTime>
                                                <MsgType><![CDATA[{3}]]></MsgType>
                                                <Image>
                                                <MediaId><![CDATA[{4}]]></MediaId>
                                                </Image>
                                               </xml>", toUserName, fromUserName, createTime, msgType, wechat.MediaId);

                    return GetReturn(sendMessage);
                    }
                default:
                    return GetReturn("error");
            }
        }

        public string GetSendMessage(string toUserName, string content, string fromUserName, string msgType = "text")
        {
            var createTime = ConvertDateTimeInt(DateTime.Now);
            //var returnMessage = new Wechat
            //{
            //    ToUserName = toUserName,
            //    FromUserName = fromUserName,
            //    CreateTime = createTime,
            //    MsgType = msgType,
            //    Content = content
            //};
            //return XmlUtil.Serializer(typeof(Wechat), returnMessage);

            return string.Format(@"<xml>
                                    <ToUserName><![CDATA[{0}]]></ToUserName>
                                    <FromUserName><![CDATA[{1}]]></FromUserName>
                                    <CreateTime>{2}</CreateTime>
                                    <MsgType><![CDATA[{3}]]></MsgType>
                                    <Content><![CDATA[{4}]]></Content>
                                   </xml>", toUserName, fromUserName, createTime, msgType, content);
        }

        private int ConvertDateTimeInt(DateTime time)
        {
            DateTime startTime = TimeZone.CurrentTimeZone.ToLocalTime(new DateTime(1970, 1, 1));
            return (int)(time - startTime).TotalSeconds;
        }

        public static HttpResponseMessage GetReturn(string message)
        {
            return new HttpResponseMessage
            {
                Content = new StringContent(message, Encoding.UTF8, "text/html")
            };
        }


        #region Check Token
        public HttpResponseMessage ConnWeChat(string signature, string timestamp, string nonce, string echostr)
        {
            string EchoStr = Valid(signature, timestamp, nonce, echostr);
            return ToHttpMsgForWeChat(echostr);
        }

        public static HttpResponseMessage ToHttpMsgForWeChat(string strMsg)
        {
            var result = new HttpResponseMessage
            {
                Content = new StringContent(strMsg, Encoding.GetEncoding("UTF-8"), "application/x-www-form-urlencoded")
            };

            return result;
        }

        private string Valid(string signature, string timestamp, string nonce, string echostr)
        {
            if (CheckSignature(signature, timestamp, nonce))
            {
                if (!string.IsNullOrEmpty(echostr))
                {
                    return echostr;
                }
            }
            return "";
        }

        private bool CheckSignature(string signature, string timestamp, string nonce)
        {
            string[] arrTmp = { Token, timestamp, nonce };
            Array.Sort(arrTmp); //字典排序
            string tmpStr = string.Join("", arrTmp);
            tmpStr = FormsAuthentication.HashPasswordForStoringInConfigFile(tmpStr, "SHA1");
            tmpStr = tmpStr.ToLower();

            if (tmpStr == signature)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        #endregion
    }
}
