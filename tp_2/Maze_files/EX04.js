window.onload = () => {
  const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Cannot find the element ${selector} `);
  };
  document.getElementById("end").onmouseover = () => {
    if (status == true) {
      alert("You Win !");
    } else {
      alert("You Lost !");
    }
  };
  function lost() {
    let allBoundary = Array.from(document.querySelectorAll("#maze .boundary"));
    for (let i = 0; i < allBoundary.length; i++) {
      allBoundary[i].addEventListener("mouseover", () => {
        for (let j = 0; j < allBoundary.length; j++) {
          allBoundary[j].style.backgroundColor = "red";
        }
        status = false;
      });
    }
  }
  lost();
  let allBoundary = Array.from(document.querySelectorAll("#maze .boundary"));
  let start = selectElement("#start");
  start.addEventListener("click", () => {
    allBoundary.forEach((e) => {
      e.style.backgroundColor = "#eeeeee";
    });
    status = true;
  });
};
