var option = confirm("Do You Agree  Ok=Yes  (or) Cancel=NO ");
var ask = (option) => option === true ? alert("You agreed.") : alert("You Canceled the execution.");
ask(option)