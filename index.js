function randomNumber1(){
    var number1 = Math.floor(6 * Math.random()) + 1;
    return number1;
}

function randomNumber2(){
    var number2 = Math.floor(6 * Math.random()) + 1;
    return number2;
}

function mainNumber1(){
    var mainNumber1 = randomNumber1();
    if(mainNumber1 === 1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
    }else if(mainNumber1 === 2){
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png")
    }else if(mainNumber1 === 3){
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png")
    }else if(mainNumber1 === 4){
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png")
    }else if(mainNumber1 === 5){
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png")
    }else if(mainNumber1 === 6){
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
    }
    return mainNumber1;
}

function mainNumber2(){
    var mainNumber2 = randomNumber2();
    if(mainNumber2 === 1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png")
    }else if(mainNumber2 === 2){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png")
    }else if(mainNumber2 === 3){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png")
    }else if(mainNumber2 === 4){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png")
    }else if(mainNumber2=== 5){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png")
    }else if(mainNumber2 === 6){
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
    }
    return mainNumber2;
}

function main(){
    mainNumber1();
    mainNumber2();

    var num1 = mainNumber1();
    var num2 = mainNumber2();

    if(num1 > num2){
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    }else if(num1 < num2){
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    }else{
        document.querySelector("h1").innerHTML = "Draws!"
    }
}

window.onload = function() {
    main();
};