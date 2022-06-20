let arrow = document.querySelector(".arrow");
let more = document.querySelector(".more");

more.addEventListener("mouseenter", () => {
  arrow.classList.add("active");
});

more.addEventListener("mouseleave", () => {
  arrow.classList.remove("active");
});
