let lastKnownScrollPosition = 0;

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (lastKnownScrollPosition > 0) {
    document.querySelector("header").classList.add("scroll")
  }
    else{
        document.querySelector("header").classList.remove("scroll")
    }
});