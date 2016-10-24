using System.Xml.Serialization;

namespace MyWeb.Model
{
    [XmlRootAttribute("xml")]
    public class Wechat
    {
        public string ToUserName { set; get; }
        public string FromUserName { set; get; }
        public string MsgType { set; get; }
        public string Content { set; get; }
        public string Event { set; get; }
        public string PicUrl { set; get; }
        public string MediaId { set; get; }
        public string MsgId { set; get; }
        public int CreateTime { set; get; }
        public Image Image { set; get; }
    }

    [XmlRootAttribute("Image")]
    public class Image
    {
        public string MediaId { get; set; }
    }
}