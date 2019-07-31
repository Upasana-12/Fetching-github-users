var pre=document.getElementById("pre");
var next=document.getElementById("next");
var parent=document.getElementById("display");
var items=[];

								var xhr=new XMLHttpRequest();
								var url="https://api.github.com/users?since=135";
								xhr.open("GET",url);
								xhr.send();

								xhr.onload=function()
								{
									console.log(xhr.responseText);
									items=JSON.parse(xhr.responseText);
									console.log(typeof(items));
								//	display_people(items);
								}
		var index=0;
pre.addEventListener("click",function(e)
{
	index--;
	if(index<0)
	index=0;
	display_people(items[index]);
});
next.addEventListener("click",function(e)
{
	index++;
	display_people(items[index]);
});	
// display_people(items[index]);	
	function display_people(item)
	{
			var img=item.avatar_url;
			var login=item.login;
			var url=item.url;
			var node=document.createElement("tr");
			var node1=document.createElement("td");
			var p=document.createElement("img");
			p.setAttribute("src",img);
			p.setAttribute("height","85px");
			p.setAttribute("width","85px");
			node1.appendChild(p);
			node.appendChild(node1);
			var node2=document.createElement("td");
			node2.innerHTML=login;
			node.appendChild(node2);
			var node3=document.createElement("td");
			var a=document.createElement("a");
			a.setAttribute("href",url);
			a.innerHTML=url;
			node3.appendChild(a);
			node.appendChild(node3);
			parent.appendChild(node);
		
	}		