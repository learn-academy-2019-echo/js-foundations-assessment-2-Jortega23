// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
function divNum (num){
    if(num%3 === 0){
        return num + " is divisble by three"
    }else if(num%3 === 1){
        return num + " is not divisble by three"
    }else if(num%3 !==0){
       return num + " is not divisble by three"
    }
}
console.log(divNum(15));
console.log(divNum(0));
console.log(divNum(385));
console.log(divNum(-7));

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.
var helloMe = {
    firstName: "Jesus",
    lastName: "Ortega",
    hand: "right handed",
    music: "rap/hip-hop",
    getData: function() {return "Hello my name is " + this.firstName + this.lastName + " and I am " + this.hand + " and I listen to " + this.music + " music."}
    
}
console.log(helloMe.getData());

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

// var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
 
 function newNouns(arr){
     let newList = []
     for(let i=0; i < arr.length; i++){
        if(i%2 === 0){
          newList.push(arr[i])  
        }
    }
    return newList.join(" ")
}
 console.log(newNouns(randomNouns))

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
function capArray(arr){
    var newArr = []
    for(let i = 0; i < arr.length; i++){
        var newStr = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
        newArr.push(newStr);
    }
   return newArr 
}
console.log(capArray(randomNouns));

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]




// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
function alphabetSoup(str){
  var arr = str.split('');
//   console.log(arr)
  var sorted = arr.sort();
//   console.log(sorted)
  return sorted.join('');
}
console.log(alphabetSoup(testString1));
console.log(alphabetSoup(testString2));
console.log(alphabetSoup(testString3));


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

function alphabetSoup1(str1, str2, str3){
  var allStr = str1 + str2 + str3
  var arr = allStr.split('');
//   console.log(arr)
  var sorted = arr.sort();
//   console.log(sorted)
  return sorted.join('');
}
console.log(alphabetSoup1(testString1, testString2, testString3));

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

function everything(arr1, arr2){
        let allData = ""
    for(var i=0; i < arr1.length; i++){
        // let allData = ""
        let newStr1 = arr1[i];
        let newStr2 = arr2[i];
        let allStr = newStr1 + " " + newStr2
            allData = allData + " " + allStr
    }
    return allData;
}
console.log(everything(amounts, animals))


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
