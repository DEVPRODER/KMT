 function hideA(x) {
   if (x.checked) {
     document.getElementById("A").style.visibility = "hidden";
     document.getElementById("B").style.visibility = "visible";
   }
 }

 function hideB(x) {
   if (x.checked) {
     document.getElementById("B").style.visibility = "hidden";
     document.getElementById("A").style.visibility = "visible";
   }
 }