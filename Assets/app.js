const tl = gsap.timeline();
const title = document.getElementsByClassName("title");
const headerImage = document.getElementById("header-image");

tl.fromTo(title , 2, {opacity: 0, x: -300} , {opacity: 1, x:5}).fromTo(headerImage, 0.5, {opacity: 0, y:-30}, {opacity: 1, y:100});