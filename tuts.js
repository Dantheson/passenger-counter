let myAge = 19; 

console.log(myAge);

myAge = 19; 
let humanDogRatio = 7; 
let myDogAge = myAge * humanDogRatio; 

console.log(myDogAge);

let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50; 
console.log(bonusPoints);

bonusPoints = bonusPoints - 75; 
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);

}

countdown();

function forytwo() {
    console.log(42);
}

forytwo();

let lap1 = 34; 
let lap2 = 33; 
let lap3 = 36; 


function lapSum() {
    let totalTime = lap1 + lap2 + lap3; 
    console.log(totalTime);
}

lapSum()
lapSum()

let lapsCompleted = 0; 

function incremente() {
    lapsCompleted = lapsCompleted + 1;
}



incremente();
incremente();
incremente();

console.log(lapsCompleted); 

let username = 'Rudolph';

let message = 'You have tree new notifications'; 
console.log(message);

console.log(message + ', ' + username + '!');

let messageToUser = message + ', ' + username + '!'; 
console.log(messageToUser);

let nam  = 'Daniel'; 

let greeting = 'Hi, my name is '; 

let myGreeting = greeting + nam; 

console.log(myGreeting);

let poins = 4; 

let bonusPoins = "10"; 

let totalPoins = poins + bonusPoins; 

console.log(totalPoins);

let welcomeEl = document.getElementById("welcome-el"); 

greeting = 'Welcome back '; 

welcomeEl.innerText = greeting + nam;

welcomeEl.innerText += "👋"