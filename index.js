var firstPerson=prompt('Input Player 1')
var secondPerson=prompt('Input Player 2')

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;


document.querySelector(".img1").setAttribute('src', 'images/dice'+randomNumber1+'.png')
document.querySelector(".img2").setAttribute('src', 'images/dice'+randomNumber2+'.png')


if(randomNumber1>randomNumber2){
    document.querySelector('h1').textContent= firstPerson+" Wins 🚩";
}

else if(randomNumber2>randomNumber1){
    document.querySelector('h1').textContent=secondPerson+" Wins 🚩";
}

else{
    document.querySelector('h1').textContent="It's a tie, Refresh";
}