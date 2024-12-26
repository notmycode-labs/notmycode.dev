export async function GET() {
  const phpVersion = "PHP/5.2.17";
  const serverInfo = "Apache/1.3.37 (Unix)";
  const date = new Date().toUTCString();
  
  const insecureHeaders = [
    "X-Powered-By: PHP/5.2.17",
    "Server: Apache/1.3.37 (Unix)",
    "X-Content-Type-Options: nosniff",
    "X-XSS-Protection: 0",
    "X-Frame-Options: SAMEORIGIN",
    "Content-Type: text/html; charset=ISO-8859-1",
  ];

  const responseBody = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>The resource cannot be found.</title>
            <meta name="viewport" content="width=device-width" />
            <style>
             body {font-family:"Verdana";font-weight:normal;font-size: .7em;color:black;}
             p {font-family:"Verdana";font-weight:normal;color:black;margin-top: -5px}
             b {font-family:"Verdana";font-weight:bold;color:black;margin-top: -5px}
             H1 { font-family:"Verdana";font-weight:normal;font-size:18pt;color:red }
             H2 { font-family:"Verdana";font-weight:normal;font-size:14pt;color:maroon }
             pre {font-family:"Consolas","Lucida Console",Monospace;font-size:11pt;margin:0;padding:0.5em;line-height:14pt}
             .marker {font-weight: bold; color: black;text-decoration: none;}
             .version {color: gray;}
             .error {margin-bottom: 10px;}
             .expandable { text-decoration:underline; font-weight:bold; color:navy; cursor:hand; }
             @media screen and (max-width: 639px) {
              pre { width: 440px; overflow: auto; white-space: pre-wrap; word-wrap: break-word; }
             }
             @media screen and (max-width: 479px) {
              pre { width: 280px; }
             }
            </style>
        </head>
        <body bgcolor="white">
            <span><H1>Server Error in '/' Application.<hr width=100% size=1 color=silver></H1>
            <h2><i>The resource cannot be found.</i></h2></span>
            <font face="Arial, Helvetica, Geneva, SunSans-Regular, sans-serif">
            <b>Description:</b> HTTP 404. The resource you are looking for (or one of its dependencies) could have been removed, had its name changed, or is temporarily unavailable. &nbsp;Please review the following URL and make sure that it is spelled correctly.
            <br><br>
            <b>Additional Information:</b>
            <p><b>PHP Version:</b> ${phpVersion}</p>
            <p><b>Server Info:</b> ${serverInfo}</p>
            <p><b>Date:</b> ${date}</p>
            <p><b>Error:</b> Internal Server Error (500)</p>
            <p><b>Stack trace:</b><br>PHP Fatal error: Call to undefined function checkpw() in /var/www/html/index.php on line 12</p>
	    <p><b>Attempting to check credentials:</b><br> Checking password for user 'admin:123'...<br><br>
            <p><b>Warning:</b> This server is running an outdated version of PHP (5.2.17). This version is no longer supported, and poses a security risk.</p>
            </font>
        </body>
    </html>
  `;

  return new Response(responseBody, {
    status: 500,
    headers: {
      ...insecureHeaders.reduce((acc, header) => {
        const [key, value] = header.split(": ");
        acc[key] = value;
        return acc;
      }, {}),
      "Connection": "close",
      "Date": date,
    },
  });
}
