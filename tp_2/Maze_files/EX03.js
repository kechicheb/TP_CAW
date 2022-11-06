window.onload = () => {
  let status = true;
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
  document.getElementById("end").onmouseover = () => {
    if (status == true) {
      alert("You Win !");
    } else {
      alert("You Lost !");
    }
  };
};
