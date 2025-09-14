// Typewriter effect implemented using Typed.js
// Original library by Matt Boldt: https://github.com/mattboldt/typed.js/
function init() {
  var typed = new Typed(".professionalTitle", {
    strings: ["Software Engineer", "Full Stack Developer", "UX/UI Designer"],
    typeSpeed: 50,
    loop: true,
  });

  // I implemented scroll reveal animation using scrollreveal API: https://scrollrevealjs.org/api/reveal.html
  ScrollReveal().reveal(".ScrollReveal", {
    delay: 300,
    duration: 600,
    origin: "top",
    reset: true,
  });
  // https://formspree.io/forms/xeoldrvz/integration 
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thank you for your message. I will get back to you shortly!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
}
document.addEventListener("DOMContentLoaded", init);
