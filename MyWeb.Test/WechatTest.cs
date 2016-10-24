using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyWeb.Controllers;
using NUnit.Framework;

namespace MyWeb.Test
{
    [TestFixture]
    public class WechatTest
    {
        public void TestGetMessage()
        {
            var controller = new WechatController();
            var message = @"<xml>
<ToUserName><![CDATA[公众号]]></ToUserName>
<FromUserName><![CDATA[粉丝号]]></FromUserName>
<CreateTime>1460537339</CreateTime>
<MsgType><![CDATA[text]]></MsgType>
<Content><![CDATA[欢迎开启公众号开发者模式]]></Content>
<MsgId>6272960105994287618</MsgId>
</xml> ";
            controller.ReceiveMessage(message);
        }
    }
}
