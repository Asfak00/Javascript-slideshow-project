let allElements = document.querySelectorAll(".sliding-content");

const result = () => {
  let count = 1;
  setInterval(() => {
    count++;
    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");

    if (count > allElements.length) {
      allElements[0].classList.add("current");
      count = 1;
    } else {
      currentElement.nextElementSibling.classList.add("current");
    }
  }, 2000);
};

result();
