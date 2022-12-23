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

  console.log("done");
}
