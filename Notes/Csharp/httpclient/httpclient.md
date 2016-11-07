<!-- TOC insertAnchor:true orderedList:true -->

1. [403 access denied](#403-access-denied)
2. [webpage with credentials](#webpage-with-credentials)

<!-- /TOC -->

<a id="markdown-403-access-denied" name="403-access-denied"></a>
## 403 access denied
from http://stackoverflow.com/questions/21441688/im-getting-403-with-httpclient-on-portable-class-library

var httpClient = new HttpClient();

httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept", "text/html,application/xhtml+xml,application/xml");
httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Encoding", "gzip, deflate");
httpClient.DefaultRequestHeaders.TryAddWithoutValidation("User-Agent", "Mozilla/5.0 (Windows NT 6.2; WOW64; rv:19.0) Gecko/20100101 Firefox/19.0");
httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Accept-Charset", "ISO-8859-1");

var response = await httpClient.GetAsync(new Uri(url));

response.EnsureSuccessStatusCode();
using (var responseStream = await response.Content.ReadAsStreamAsync())
//using (var decompressedStream = new System.IO.Compression.GZipStream(responseStream, CompressionMode.Decompress))
using (var streamReader = new StreamReader(responseStream))
{
    return streamReader.ReadToEnd();
}

<a id="markdown-webpage-with-credentials" name="webpage-with-credentials"></a>
## webpage with credentials
from http://stackoverflow.com/questions/11118712/webclient-accessing-page-with-credentials

this client to fire off the 2 requests:

using (var client = new CookieAwareWebClient())
{
    var values = new NameValueCollection
    {
        { "username", "john" },
        { "password", "secret" },
    };
    client.UploadValues("http://domain.loc/logon.aspx", values);

    // If the previous call succeeded we now have a valid authentication cookie
    // so we could download the protected page
    string result = client.DownloadString("http://domain.loc/testpage.aspx");
}

public class CookieAwareWebClient : WebClient
{
    public CookieAwareWebClient()
    {
        CookieContainer = new CookieContainer();
    }
    public CookieContainer CookieContainer { get; private set; }

    protected override WebRequest GetWebRequest(Uri address)
    {
        var request = (HttpWebRequest)base.GetWebRequest(address);
        request.CookieContainer = CookieContainer;
        return request;
    }
}

