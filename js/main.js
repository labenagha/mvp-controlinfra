// var userWords = prompt("What's on your mind today: ");
// var tweetCharacterLimit = 280;

// alert("You have written " + userWords.length + " characters, and you have " + (tweetCharacterLimit - userWords.length) + " you have characters remaining.");


// function lifeInWeeks(age) {
//     var yearsRemaining = 90 - age;
//     var days = yearsRemaining * 365
//     var weeks = yearsRemaining * 52
//     var months = yearsRemaining * 12
    
//     console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
// }


// lifeInWeeks(32)

function bmiCalculator(weight, height) {
    var calculation = weight / Math.pow(height, 2)
    return Math.round(calculation)
}

var bmi = bmiCalculator(100, 3.8)
console.log(bmi)


