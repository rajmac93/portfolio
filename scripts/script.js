const pageProgressBar = document.querySelector(".progress--bar");

const showOnPx = 100;

const toggleMenu = () => {
  const menu = document.querySelector(".menu--links");
  const icon = document.querySelector(".hamburger--icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;
});
