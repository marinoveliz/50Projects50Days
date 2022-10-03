const d = document,
  $medioCirculo = d.querySelector(".medio-circulo"),
  $container = d.querySelector(".container"),
  $menuContainer = d.querySelector(".container-menu");

$medioCirculo.addEventListener("click", () => {
  $medioCirculo.classList.toggle("rotate");
  $container.classList.toggle("container-rotate");
  $menuContainer.classList.toggle("menu-active");
});
