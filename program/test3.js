const hex2rgb = function(color) {
    // note: hexStr should be #rrggbb
    var hex = parseInt(color.substring(1), 16);
    var r = (hex & 0xff0000) >> 16;
    var g = (hex & 0x00ff00) >> 8;
    var b = hex & 0x0000ff;
    return r + "," + g + "," + b;
}

var result=hex2rgb("#ffffff");
console.log("vineet",result);
