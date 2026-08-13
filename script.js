//your JS code here. If required.
const p = document.getElementById("status");
const h1 = document.createElement("h1");
const btn = document.getElementById("enterBtn");

let content = "Entered Metaverse";

btn.addEventListener("click",function() {
	h1.innerHtml = content;;
	p.replaceWith(h1);
});
