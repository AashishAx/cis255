var a = document.createElement("a");
var b = document.createElement("h1");
var c = document.createElement("p");
var d = document.createElement("script");
var text = document.createTextNode("My Link");
a.setAttribute("href", "#");
a.append(text);
var text_h1 = document.createTextNode("Hello World!");
b.append(text_h1);
var text_p = document.createTextNode("This is the paragraph");
c.append(text_p);
document.getElementById("h1").onclick = function(){
	alert(document.URL);
}
function myfunct()
{
	var string = "";
	var st2 = document.getElementById("input1").value;
	for(var i=0; i<string.length; i++)
	{
		string += st2[i]+".";
	}
	
	document.getElementById("span1").innerHTML = string;
}