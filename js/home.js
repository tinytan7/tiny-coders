//for sticky nav bar
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//for button pop
var pop_btn = document.getElementsByClassName("pop_btn");
console.log(pop_btn.length);
for (let index = 0; index < pop_btn.length; index++) {
  pop_btn[index].addEventListener("mousedown", function () {
    pop_btn[index].style.boxShadow = "0px 0px ";
  });
  pop_btn[index].addEventListener("mouseup", function () {
    pop_btn[index].style.boxShadow = "0px 5px 0px blue ";
  });
}
