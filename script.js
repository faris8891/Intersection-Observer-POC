const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      // if (entry.isIntersecting) observer.unobserve(entry.target); // the element only observe one time
    });
  },
  {
    threshold: 1, //accept values-  0 to 1
    // rootMargin: "-100px", // we can control the margin offset, its better to use infinite observer before reach end
  }
);

// lazy loading

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCard = entries[0];

    if (!lastCard.isIntersecting) return;
    loadNewData();
        lastCardObserver.unobserve(lastCard.target);
        lastCardObserver.observe(document.querySelector(".card:last-child"))
  },
  {
      threshold: 1,
      rootMargin:"100px"
  }
);

lastCardObserver.observe(document.querySelector(".card:last-child"));

cards.forEach((card) => {
  observer.observe(card);
});

const cardContainer  = document.querySelector(".card-container")

function loadNewData() {
  // Write fetch logic here

  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New generated Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
}
