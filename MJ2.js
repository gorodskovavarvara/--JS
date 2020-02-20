function animate(id) {
    var node = document.getElementById(id).childNodes[0];
    var text = node.data;
    setInterval(function () {
     text = text.substring(1) + text[0];
     node.data = text;
    }, 125); 
   }
   window.addEventListener('load', function (e) { animate('line'); }, false);




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



function OK()
{
	var flag = true; 
	var count = my.getElementsByTagName("input").length;
	for(var i = 0; i < count;i++)
	{
		if(my.getElementsByTagName("input")[i].value == "" )
		{
			flag = false;
		}
	}
	if(!flag) 
	{
		alert("Please fill all the fields");
	}
	else
	{
		if(confirm("is all right?")) {
            alert("Welcome!")
        } 
        else{
            my.fio.value = "";
            my.mail.value = "";
            my.com.value = "";
        }
	}
}