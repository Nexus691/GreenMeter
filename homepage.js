// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "🌞" : "🌙";
});

// NAVBAR HIDE ON SCROLL
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScroll = currentScroll;
});

// COUNTERS
function animate(id, end) {
  let el = document.getElementById(id);
  let val = 0;
  let interval = setInterval(() => {
    val++;
    el.textContent = val;
    if (val >= end) clearInterval(interval);
  }, 25);
}

animate("co2", 18);
animate("water", 240);
animate("eco", 86);
