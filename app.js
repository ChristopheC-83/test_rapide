const titre = document.querySelector('h1 span')
const box = document.querySelector('.box')

titre.addEventListener("mouseenter", () => {
  box.classList.add("dnone");
});

titre.addEventListener("mouseleave", () => {
  box.classList.remove("dnone");
});
