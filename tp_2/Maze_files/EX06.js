window.onload = () => {
  const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Cannot find the element ${selector} `);
  };
  let start = selectElement("#start");
  let status = true;
  let h2Status = selectElement("#status");

  let allBoundary = Array.from(document.querySelectorAll("#maze .boundary"));
  start.addEventListener("click", () => {
    allBoundary.forEach((e) => {
      e.style.backgroundColor = "#eeeeee";
    });
    status = true;
    if (document.querySelector("#status strong")) {
      selectElement("#status").innerHTML =
        'Move your mouse over the "S" to begin.';
    }
  });
  for (let i = 0; i < allBoundary.length; i++) {
    allBoundary[i].addEventListener("mouseover", () => {
      for (let j = 0; j < allBoundary.length; j++) {
        allBoundary[j].style.backgroundColor = "red";
      }
      status = false;
      textAlert(status);
    });
  }

  selectElement("#end").onmouseover = () => {
    textAlert(status);
  };
  function textAlert(status) {
    if (document.querySelector("#status strong")) {
      selectElement("#status strong").remove();
    }
    let myStrong = document.createElement("strong");
    let myText;
    if (status == true) {
      myText = document.createTextNode("   You win !");
      myStrong.style.color = "green";
    } else {
      myText = document.createTextNode("   You Lost");
      myStrong.style.color = "red";
    }
    myStrong.appendChild(myText);
    h2Status.appendChild(myStrong);
  }
};
