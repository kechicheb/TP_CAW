   window.onload = ()=> {
    document.querySelectorAll("#maze .boundary").forEach((boundary) => {
        boundary.onmouseover = () => {
          boundary.style.backgroundColor = "red";
        };
      });
   }