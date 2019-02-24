function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include_html_file");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include_html_file");
          includeHTML();
        }
      } 
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

/*function doToggle(elmnt)
{
	var x = document.getElementById("createClassHd").innerHTML;
	if(x.includes('+'))
	{
	     document.getElementById("createClassHd").innerHTML=x.replace("+","-");
	}
    else
	{
		 document.getElementById("createClassHd").innerHTML=x.replace("-","+");
	}
}*/

function doToggle(elmnt)
{
	var x = elmnt.innerHTML;
	if(x.includes('onn'))
	{
	     elmnt.innerHTML=x.replace("onn","off");
	}
    else
	{
		 elmnt.innerHTML=x.replace("off","onn");
	}
}