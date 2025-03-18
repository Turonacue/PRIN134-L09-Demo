document.getElementById('highlight-ingredients').addEventListener('click', function() {
    const ingredients = document.querySelectorAll('#recipe-ingredients li');
    
    ingredients.forEach((ingredient, index) => {
      if (index % 2 === 0) {
        ingredient.classList.toggle('highlighted');
      } else {
        ingredient.classList.remove('highlighted');
      }
    });
  });

  document.getElementById("Check").addEventListener("click", function() {
    setTimeout(() => {
      const instructions = document.querySelectorAll("#recipe-instructions li");
      instructions.forEach(item => {
        item.classList.add("is-done");
      });
    }, 3000);
});

document.getElementById("erase").addEventListener("click", function() {
    const instructions = document.querySelectorAll("#recipe-instructions li");
    instructions.forEach(item => {
      item.classList.remove("is-done");
    });
  });

  document.querySelector("h2.headers:nth-of-type(1)").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__flip");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__flip");
    }, 1000);
});

document.querySelector("h2.headers:nth-of-type(2)").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__rotateIn");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__rotateIn");
    }, 1000);
});

document.querySelector("img").addEventListener("click", function() {
    this.classList.add("animate__animated", "animate__hinge");
    setTimeout(() => {
      this.classList.remove("animate__animated", "animate__hinge");
    }, 1000);
});