const h1 = document.querySelector("h1");
const text = "animation";
const arr = text.split("");

generateText(arr);

function generateText(text) {
  text.forEach((data) => {
    const span = document.createElement("span");
    span.classList.add("char");
    span.innerHTML = data;
    h1.appendChild(span);
  });
}

// gsap
gsap.from(".char", {
  y: 100,
  stagger: 0.07,
  delay: 0.2,
  ease: "back.out",
  duration: 1,
});
