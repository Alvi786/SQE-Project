function changecolor(color) {
	document.getElementsByTagName('body')[0].style.backgroundColor=color.value;
	var fontcolor=document.getElementById("fcolor");
	var font=document.getElementById("para2");
	font.style.color=fontcolor.value;


}
function changefontcolor(color) {
	
var fontcolor=document.getElementById("font");	
document.getElementById('para2')[0].style.Color=fontcolor.value;

}
