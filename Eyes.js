var balls = document.getElementsByClassName("ball");
//var balls = document.getElementById("ojo");
document.onmousemove = (event) => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
    console.log(x,y);
  }

    //balls[0].style.transform = "rotate(45deg)";
    /* balls.style.left = x;
    balls.style.top = y;
    balls.transfoorm = "translate(-" + x + ",-" + y + ")";
    balls.style.transform = "rotate(20deg)";  */
};