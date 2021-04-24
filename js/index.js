p = document.getElementById('pop')
b=document.getElementById('body')
setTimeout(alertFunc, 1000);
function alertFunc(){
  document.getElementById("pop").style.display="none"
  document.getElementById("body").style.display="block"
}


function menuo(){
  document.getElementById("side").style.width="100%"
}
function cm(){
 document.getElementById("side").style.width="0%"
}

function search(){
  document.getElementById("hed").style.height="100px"
  document.getElementById("sopen").style.display="none"
  document.getElementById("sclose").style.display="block"
  document.getElementById("top").style.height="110px"

}

function srclose(){
 document.getElementById("hed").style.height="50px"
  document.getElementById("sopen").style.display="block"
  document.getElementById("sclose").style.display="none"
   document.getElementById("top").style.height="70px"
}