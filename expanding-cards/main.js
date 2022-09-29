const d = document;
const $panel = d.querySelectorAll(".panel");

console.log($panel);

$panel.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    console.log(panel);
    removeActiveClass();
    panel.classList.add("is-active");
  });
});

function removeActiveClass() {
  $panel.forEach((panel) => panel.classList.remove("is-active"));
}
