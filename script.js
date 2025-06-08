document.querySelectorAll(".navbar-nav .nav-link").forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});

const toogleDarkLight = document.getElementById("toogleDarkLight");
const sunMoonIcons = document.getElementsByTagName("#toogleDarkLight i");
const body = document.getElementById("mainBody");

toogleDarkLight.addEventListener("click", () => {
  const currentAtr = body.getAttribute("data-bs-theme");
  const newTheme = currentAtr === "light" ? "dark" : "light";
  body.setAttribute("data-bs-theme", newTheme);
  const element = document.getElementById("sunAndmoonIcon");

  if (element.classList == "ri-sun-fill") {
    body.classList.add('darkThemeColors')
    element.classList.remove("ri-sun-fill");
    element.classList.add("ri-moon-fill");
  } else {
     body.classList.add('')
    element.classList.remove("ri-moon-fill");
    element.classList.add("ri-sun-fill");
  }
});
