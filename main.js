let title = document.getElementById("title");
let menu = document.getElementById("menu");
let pictures = new Array("images/pic1.png", "images/pic3.png", "images/pic4.png");
let switcher = document.getElementById("switch");
let currentPic = 0;
const MAX_WIDTH = window.innerWidth
const MENU_WIDTH = 40;


let menuLeft = MAX_WIDTH - (MENU_WIDTH + 20);

function switchPic()
{
    switcher.src = pictures[currentPic];
    currentPic++;
    currentPic %= pictures.length;
}

function switchByClicks()
{
    setTimeout(switchPic, 0);
}

title.style.marginLeft = "20px";
menu.style.left = menuLeft + "px";
setInterval(switchPic, 3000);




