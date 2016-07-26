var sonnet = document.getElementById("sonnet").innerHTML;


console.log(sonnet.indexOf("orphans"));
console.log(sonnet.length);
var newSonnet = sonnet.replace("winter", "yuletide");
newSonnet += sonnet.replace(/the/g, "a large");
document.getElementById("sonnet").innerHTML = newSonnet;
