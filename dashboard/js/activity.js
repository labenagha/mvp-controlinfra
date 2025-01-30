// function bmiCalculator (weight, height) {
    
//     var interpretation = weight/Math.pow(height, 2)
//     interpretation = Math.round(interpretation);

//     if (interpretation < 18.5) {
//         interpretation = "Your BMI is " + interpretation + ", so you are underweight.";
//         } else if (interpretation >= 18.5 && interpretation <= 24.9) {
//             interpretation = "Your BMI is " + interpretation + ", so you have a normal weight.";
//         } else {
//             interpretation = "Your BMI is " + interpretation + ", so you are overweight.";
//         }
    
//     return interpretation;
// }

// console.log(bmiCalculator(65, 1.8));

// function isLeap(year) {
    
//     /**************Don't change the code above****************/    
        
//     if (year % 4 === 0) {
//         year = "Leap year.";

//         } else if (year % 100 === 0) {
//             year = "Not leap year.";
//         }
//         else if (year % 400 === 0) {
//             year = "Leap year.";
//         }

//         else {
//             year = "Not leap year.";
//         }
    
//     /**************Don't change the code below****************/    
    
//     return year;
// }

// console.log(isLeap(2027));

function whoIsBuyingLunch(names) {
    var randomName = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var randomNameIndex = Math.floor(Math.random() * randomName.length);
    var randomNamePicked = randomName[randomNameIndex];

    if (randomNamePicked === randomName[0]) {
        return "Angela is our boss, so she's safe from buying lunch!";
    } else {
        return randomNamePicked + " is going to buy lunch today!";
    }
}

console.log(whoIsBuyingLunch(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));