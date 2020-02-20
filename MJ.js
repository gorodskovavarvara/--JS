function animate(id) {
    var node = document.getElementById(id).childNodes[0];
    var text = node.data;
    setInterval(function () {
     text = text.substring(1) + text[0];
     node.data = text;
    }, 125); 
   }
   window.addEventListener('load', function (e) { animate('line'); }, false);



   var image = new Array("1.JPG", "2.JPG", "3.JPG", "7.JPG", "8.JPG", "9.JPG", "11.JPG", "12.JPG");
var picture=document.getElementById("pi")
r.addEventListener('click',(e)=>{ChangeImage(1)})
l.addEventListener('click',(e)=>{ChangeImage(-1)})
var pointer = 0;
var len = image.length
var ChangeImage=(parametr)=>{
    pointer=pointer+parametr;
    if (pointer>len-1)
    {
        pointer=0;
    }
    if (pointer<0)
    {
        pointer=len-1
    }
    
    picture.setAttribute("src",image[pointer])
}






var colors = new Array("#FFFFFF", "#58595B");
var num = 0;

function ChangeColor()
{
	if(event == "col")
	{
		col.style.backgroundColor = colors[num];
	}
	else
	{
		document.body.style.backgroundColor = colors[num];
	}
	num++;
	if(num == colors.length) { num = 0; }
}
document.col = ChangeColor();


