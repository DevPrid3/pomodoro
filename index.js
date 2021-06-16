const numb = document.querySelector(".numb");
let counter = 0;
const interval = setInterval(() => {
  if (counter === 100) {
    clearInterval(interval);
    console.log("Interval Clear !");
  } else {
    counter += 1;
    numb.textContent = counter + "%";
    console.log(counter);
  }
}, 80);
