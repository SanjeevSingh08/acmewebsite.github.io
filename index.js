var i = document.querySelector(".nav-menu-items");

document.querySelector(".open").addEventListener("click", menu);
function menu() {
  i.className = "hamburger-menu";
  document.querySelector(".menu").style.background = "#000";
  var prop = "brightness(0) invert(1)";

  var element = document.querySelector(".section-main");
  const style = getComputedStyle(element);
  const margin = style.marginTop;
  document.querySelector(".hamburger-menu").style.top = margin;
  document.querySelector(".open").style.display = "none";
  document.querySelector(".close").style.display = "block";
  document.querySelector(".close").style.filter = prop;
}

document.querySelector(".close").addEventListener("click", close);
function close() {
  i.classList.add("nav-menu-items");
  i.classList.remove = "hamburger-menu";
  document.querySelector(".open").style.display = "block";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".menu").style.background = "none";

 
}



var slider=document.querySelectorAll(".info");
var counter=0;
var k=slider.length;
console.log(slider);



for(var i=0;i<slider.length;i++){
  k=100*i;
  l=k+"%"
  
  slider[i].style.left=l;
}

const gonext=()=>{
  counter++
  sliding()
  
}
const goprev= ()=>{
  counter--
  sliding()
}

function sliding(){
  for(var i=0;i<slider.length;i++){
  console.log(counter)
  if(counter===-4){
    counter=0;
  }
  else if( counter===1){
  counter=-3
  }
 
    k=counter*100
    l=k+"%"
    j="translateX"+"("+l+")"
    console.log(j)
slider[i].style.transform=j
  }
}
