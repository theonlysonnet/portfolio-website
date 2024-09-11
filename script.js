function toggleMenu() {
    // the menu links and icon in html under the hamburger tab is targetted with the line above
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }