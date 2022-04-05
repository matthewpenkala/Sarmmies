var theFrame = $("figure#DWOLLA-ACC-TOS, figure#DWOLLA-PRIVACY").find("iframe.pdfobject:not(embed)").not("blockquote").filter("iframe").get(0);
console.log(theFrame);

var theFrameDocument = theFrame.contentDocument || theFrame.contentWindow.document;
console.log(theFrameDocument);

var sizerPDF = theFrameDocument.getElementById("sizer");
console.log(sizerPDF);
