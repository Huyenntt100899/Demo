function activeMenu(x) {
  x.classList.toggle("change");
  var x = document.getElementById("nav");
  if (x.className === "nav navbar-nav header-nav") {
    x.className += " auto";
  } else {
    x.className = "nav navbar-nav header-nav";
  }
}


