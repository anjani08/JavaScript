function changeColor(){
var randomColor= '#'+Math.floor(Math.random()*16777215).toString(16);
var canvas = document.getElementById('canvas');
canvas.style.background= randomColor;
}
changeColor();