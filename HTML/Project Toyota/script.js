// // // console is a Object
// // // . is a memeber access opreater
// // // typeof is a Keyword
// // //Keyword is a reserve words taken by the language,
// // //libaray or Frameworks 


// // // Concatenation, matlab mila kar value ko likhna 

// // console.log("Hello" + " " + "World")
// // console.log("My Name is Hasnain Riaz Ali Mughal" )
// // console.log("I am a Student of Aptech Star Gate" )
// // console.log("I am a Frontend Developer Student")

// // // this is Declaration of variable, to tell program that there is a variable
// // var y;

// // //this is Initialization of variable, to assign value to a variable 
// // y = 10;
// // console.log(y);

// // //declaration and initialization in one line
// // var x = 5;

// // // yeh humein output print krke deta hai
// // console.log(x);

// // console.log(y + x) 

// // console.log("Before Swapping:");
// // console.log("x =", x);
// // console.log("y =", y);

// // // Swapping
// // let temp = x;
// // x = y;
// // y = temp;

// // console.log("After Swapping:");
// // console.log("x =", x);
// // console.log("y =", y);

// // // Addition
// // let result = x + y;

// // console.log("Addition =", result);

 

// // let Country = prompt("Konse Mulk se ho Muhtarma");

// // switch (Country.toLowerCase()) {
// //     case "Pakistan":
// //         let city = prompt("Ustad Aap Konse Sheher se hn");
// //         switch (city.toLowerCase()) {
// //             case "Karachi":
// //                 console.log("Favourite Food is Biryani");
// //                 break;
// //         } 
// //         break;

// //         case "india":
// //             console.log("Cities are Mumbai, Lucknow, and Hyderabad");
// //             break;

// //         case "Saudia Arabia":
// //             console.log("Citeis are Makkah, Madina, Jeddah & Taif");
// //             break;

// //         default:
// //             console.log("is Country mein hum Available nhi Mazrat 🙌")
// // }

// // let num1 = 100
// // let num2 = 100

// // function Addition(){
// //     let result = num1 + num2; 
// //     alert("The Sum is " + result)

// // }

// // function Substraction(){
// //     let result = num1 - num2;
// //     alert("The Substraction is " + result)

// // }

// // function Multiplication(){
// //     let result = num1 * num2;
// //     alert("The Product is " + result)

// // }

// // function Division(){
// //     let result = num1 / num2;
// //     alert("The Divide is " + result)

// // }

// // // Function Invokation
// // Addition();
// // Substraction();
// // Multiplication();
// // Division();

// function TotalValueMaloomKro(number, power){
//     let result = 1;
//     for (i=0; i < power; i++){
//         result = result * number;
//     }
//     return result

// // Square ka
// function SquareMaaloomKaro(number) {
//     let result = num*num
//     alert("The Square of " + num + " is " + result)
// }

// // Cube ka
// function CubeMaaloomKro(number) {
// return calculatePower
// }

// }


// let person = {
//     Name: "Hasnain Riaz",
//     Age: 20,
//     city: "Thatta",
//     country: "Pakistan",
// };

// let { Name, ...rest } = person;

// console.log(Name);
// console.log(rest);
 
// let Person = {
//     name: "Ali",
//     greet: function() {
//         console.log("Hi, I'm " + this.name);
//     }
// };
// Person.greet();


let button = document.getElementById("menu-icon")

let closeButton = document.getElementById("close-icon")
let list = document.getElementById("list")

button.addEventListener("click", function() {
    list.classList.add("active")
    closeButton.style.display = "block"
})

closeButton.addEventListener("click", function() {
    list.classList.remove("active")
    closeButton.style.display = "none"
})