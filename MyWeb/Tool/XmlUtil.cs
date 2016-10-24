using System;
using System.IO;
using System.Xml;
using System.Xml.Serialization;

namespace MyWeb.Tool
{
    public class XmlUtil
    {
        #region 反序列化
        public static object Deserialize(Type type, string xml)
        {
            try
            {
                using (var sr = new StringReader(xml))
                {
                    var xmldes = new XmlSerializer(type);
                    return xmldes.Deserialize(sr);
                }
            }
            catch (Exception e)
            {

                return null;
            }
        }

        public static object Deserialize(Type type, Stream stream)
        {
            var xmldes = new XmlSerializer(type);
            return xmldes.Deserialize(stream);
        }
        #endregion

        #region 序列化
        //TODO：字段被 <![CDATA[{0}]]> 包裹
        public static string Serializer(Type type, object obj)
        {
            var stream = new MemoryStream();
            var serializer = new XmlSerializer(type);
            var settings = new XmlWriterSettings
            {
                Indent = true,
                NewLineChars = "\r\n",
                IndentChars = "    ",
                OmitXmlDeclaration = true // 不生成声明头
            };
            var namespaces = new XmlSerializerNamespaces();
            namespaces.Add(string.Empty, string.Empty);

            var writer = XmlWriter.Create(stream, settings);
            serializer.Serialize(writer, obj, namespaces);
            stream.Position = 0;
            var sr = new StreamReader(stream);
            var str = sr.ReadToEnd();

            sr.Dispose();
            stream.Dispose();
            return str;
            
        }

        #endregion
    }
}