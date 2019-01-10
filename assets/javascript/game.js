$(document).ready(function() {


//create container for randomly generated, target number
var randomNumber = [];





//create containers for keeping score -> wins & losses

var wins = 0;
var losses = 0;
var totalScore = 0;



//we need our function to randomly generate our target number!

function targetNumberGenerator () {

   return Math.floor(Math.random() * 40) + 20;
    
};

randomNumber.push(targetNumberGenerator());
console.log(randomNumber);


//reset function

function reset () {
    randomNumber = targetNumberGenerator();
    randomNumberText.text(randomNumber);
    totalScore = 0;
    totalScoreText.text(totalScore);
    firstCrystalValue = crystalNumberGenerator();
    secondCrystalValue = crystalNumberGenerator();
    thirdCrystalValue = crystalNumberGenerator();
    fourthCrystalValue = crystalNumberGenerator();


};




//create variables to hold our references to places we want to display in html!

var winText = $("#wins");
var lossesText = $("#losses");
var randomNumberText = $("#randomnumbertext");
var totalScoreText = $("#totalscoretext");


//now, we need our function to randomly generate the values of each crystal, respectively

 function crystalNumberGenerator () {

 return Math.floor(Math.random() * 10) + 5;

 };



 var firstCrystalValue = crystalNumberGenerator();
 var secondCrystalValue = crystalNumberGenerator();
 var thirdCrystalValue = crystalNumberGenerator();
 var fourthCrystalValue = crystalNumberGenerator();

 



//now, we need our function for when crystals are clicked

 


$("#crystal1").click(function () {
    //all we want to do for each crystal is add to the total!

    console.log(firstCrystalValue);
    
    totalScore += firstCrystalValue;
    console.log(totalScore);
    totalScoreText.text(totalScore);

    if (totalScore == randomNumber) {
        alert("Nailed it!");
        wins++;
        winText.text("Wins: " + wins);
        reset ();
        
        
    }
    
    if (totalScore > randomNumber) {
        alert ("You blew it!");
        losses++;
        lossesText.text("Losses: " + losses);
        reset();
       
        
        
    };
    
});

$("#crystal2").click(function () {
    //all we want to do for each crystal is add to the total!
    console.log(secondCrystalValue);
    totalScore += secondCrystalValue;
    console.log(totalScore);
    totalScoreText.text(totalScore);
    
    if (totalScore == randomNumber) {
        alert("Nailed it!");
        wins++;
        winText.text("Wins: " + wins);
        reset ();
        

        
    }
    
    if (totalScore > randomNumber) {
        alert ("You blew it!");
        losses++;
        lossesText.text("Losses: " + losses);
        reset ();
       
    };

    
    
    
});

$("#crystal3").click(function () {
    //all we want to do for each crystal is add to the total!
    console.log(thirdCrystalValue);
    totalScore += thirdCrystalValue;
    console.log(totalScore);
    totalScoreText.text(totalScore);
   
    if (totalScore == randomNumber) {
        alert("Nailed it!");
        wins++;
        winText.text("Wins: " + wins);
        reset ();
        
        
    }
    
    if (totalScore > randomNumber) {
        alert ("You blew it!");
        losses++;
        lossesText.text("Losses: " + losses);
        reset ();
    };
    
    
});

$("#crystal4").click(function () {
    //all we want to do for each crystal is add to the total!
    console.log(fourthCrystalValue);
    totalScore += fourthCrystalValue;
    console.log(totalScore);
    totalScoreText.text(totalScore);

    if (totalScore == randomNumber) {
        alert("Nailed it!");
        wins++;
        winText.text("Wins: " + wins);
        reset ();
       
    }
    
    if (totalScore > randomNumber) {
        alert ("You blew it!");
        losses++;
        lossesText.text("Losses: " + losses);
        reset ();
        
    };


    
    
    
});

//push to html!

randomNumberText.text(randomNumber);




});