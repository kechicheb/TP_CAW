let body = document.querySelectorAll("body *:not(:where(#start,#maze,#end))");
for(let n = 0;n<body.length;n++) {
    body[n].onmouseover = function ()  {
        b = false;
        for(let k=0;k<boundary.length;k++) {
            boundary[k].style.backgroundColor = "red";
        }
      };
}