window.addEventListener("scroll", () => {
    const navigation = document.querySelector(".navigation");
    if (window.scrollY > 50) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
  });