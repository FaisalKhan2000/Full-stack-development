function changeBG(color) {
  document.body.style.background = color;
  let txt = document.getElementsByClassName("text");
  console.log(txt);
  if (color === "#000000") {
    // * Using for loop
    // for (let i = 0; i < txt.length; i++) {
    //   console.log(txt[i]);
    //   txt[i].style.color = "white";
    // }

    // *Using for...of
    for (const elm of txt) {
      elm.style.color = "white";
    }
  } else {
    for (const elm of txt) {
      elm.style.color = "#000000";
    }
  }
}
