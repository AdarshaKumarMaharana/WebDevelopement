const stars = document.querySelectorAll(".stars i");
stars.forEach((star, index1) => {
  star.addEventListener('click', () => {
    stars.forEach((starItem, index2) => {
      index1 >= index2 ? starItem.classList.add("active") : starItem.classList.remove("active");
    });
  });
});