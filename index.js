var randomNumber1 = Math.floor(Math.random()*6)+1;
var photo= "images" +"/" + "dice"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random()*6)+1;
var photo2= "images" +"/" + "dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",photo) ;
document.querySelectorAll("img")[1].setAttribute("src", photo2);
if(randomNumber1>randomNumber2){
  document.getElementsByTagName('h1')[0].textContent="Player 1 wins!";
} else if(randomNumber2>randomNumber1){
  document.getElementsByTagName('h1')[0].textContent="Player 2 wins!";
}
else {
  document.getElementsByTagName('h1')[0].textContent="Draw!";
}
