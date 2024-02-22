const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target); // the element only observe one time
    });
  },
  {
    threshold: 1, //accept values-  0 to 1
    rootMargin: "-100px", // we can control the margin offset, its better to use infinite observer before reach end
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
