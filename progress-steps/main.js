const d = document,
  $steps = d.querySelectorAll(".steps"),
  $next = d.querySelector(".next"),
  $prev = d.querySelector(".prev");

$next.addEventListener("click", (e) => {
  $prev.classList.remove("disabled");
  for (let index = 0; index < $steps.length; index++) {
    if (!$steps[index].classList.contains("active")) {
      $steps[index].classList.add("active");
      break;
    }
  }
  if ($steps[$steps.length - 1].classList.contains("active")) {
    $next.classList.add("disabled");
  }
});

$prev.addEventListener("click", (e) => {
  $next.classList.remove("disabled");
  for (let index = $steps.length - 1; index > 0; index--) {
    if ($steps[index].classList.contains("active")) {
      $steps[index].classList.remove("active");
      break;
    }
  }
  if ($steps[0].classList.contains("active") && !$steps[1].classList.contains("active")) {
    $prev.classList.add("disabled");
  }
});
