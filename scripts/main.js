// Typewriter effect implemented using Typed.js
// Original library by Matt Boldt: https://github.com/mattboldt/typed.js/
function init() {
  var typed = new Typed(".professionalTitle", {
    strings: ["Software Engineer", "Full Stack Developer", "UX/UI Designer"],
    typeSpeed: 50,
    loop: true,
  });
  
}
document.addEventListener("DOMContentLoaded", init);
