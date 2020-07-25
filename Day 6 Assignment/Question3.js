// get name of user and then display welcome message on webpage
const name = prompt("Enter your name: ");

h.innerText += `Welcome to the LetsUpgrade: ${name}`;

//clock
const ctime = document.getElementById('t');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock,1000);


// darkmode
const dm = document.getElementById('dark');

dm.onclick = function changeColor(){
    
   document.body.classList.toggle('black');
   document.body.classList.toggle('white');
   
}