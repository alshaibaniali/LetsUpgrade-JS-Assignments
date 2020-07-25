var color = ["blue", "black", "yellow", "red","purple"];

  function changeColor() {
    setTimeout(function change() {
      document.bgColor = color.shift();
      if (color.length) {
        setTimeout(change, 5000);
      }
    }, 5000);
  }
  changeColor();