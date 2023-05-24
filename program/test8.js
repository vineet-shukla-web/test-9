var a="<p>Nand <a href='http://localhost:3001/MmFiaGlAZ21haWwuY29tVHVlIE1hciAyOCAyMDIzIDE1OjA0OjM3IEdNVCswNTMwIChJbmRpYSBTdGFuZGFyZCBUaW1lKQ==/Mg=='>Click here</a></p>"
var hrefAttr = a.split(/href='(.*?)'/)[1]
console.log(hrefAttr)