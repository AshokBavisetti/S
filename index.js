// console.log(typeof 33);
// console.log(typeof "");
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function(){});
// console.log(typeof undefined);
// console.log(typeof -"hari");
// console.log(typeof NaN);
// console.log(typeof typeof 1);
// ---------------------------------------

//Arthematic operator:
// +,-,*,%,/,++,--,**

// let a=20;
// ++a
// console.log(a)
// let a = 20;
// a++;
// console.log(a);
// ------------------------------------------
//Assignment operator:
// =,+=,-=,*=,%=,/=,**=

// var x=20;
//  x+=30;
// console.log(x);

// let x=y=4;
// console.log(y);
// console.log(x);
// ---------------------------------------------
//comparision operator:
//==,===,<,>,<=,>=.!=,!==


// console.log(1 !== 1)
// console.log(20>20)
// ------------------------------------------------

// let amount = 0;
// if (amount !== 0) {
//   console.log("no of ammount is : " + amount);
// } else {
//   let defaultamount = 10;
//   console.log(` default ammount is ${defaultamount}`);
// }


// let amount = 0;

// if (amount === 0) {
//   console.log("The amount is zero.");
// } else if (amount) {
//   console.log("No of amount is: " + amount);
// } else {
//   let defaultAmount = 10;
//   console.log(`Default amount is ${defaultAmount}`);
// }
// -------------------------------------------------------------
// logical operator:
// && || ??->Nullish coalescing


// console.log(1 && 2 && 3) //3
// console.log(0 && 2 && 3) //0
// console.log(null && 2 && 3) //null
// console.log(true && 0 && 3)//0

// console.log(1 || 2 || 3) //1
// console.log(1 || 0 || 3) //1
// console.log(0 || 0 || 3) //3
// console.log(null || undefined || 9) //0
// console.log(null ?? undefined ?? 9) //0

// console.log(null  ?? 6 ?? null ?? 0 ?? 77 ?? undefined)//6
// console.log(1 || 3 || 0)//1
// console.log(0 || null || undefined)


//switch:
// const day = 5;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednsday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("default");
// }
//if and else:

// const day = 7;
// if (day === 1) {
//   console.log("Sunday");
// } else if (day === 2) {
//   console.log("Monday");
// } else if (day === 3) {
//   console.log("Tuesday");
// } else if (day === 4) {
//   console.log("Wednesday");
// } else if (day === 5) {
//   console.log("Thursday");
// } else if (day === 6) {
//   console.log("Friday");
// } else if (day === 7) {
//   console.log("Saturday");
// } else {
//   console.log("default");
// }




// while (false) {
//   console.log("Hello, world!");
// }
// let x={
//   name:"ram",
//   age:23,
//   getIntro:function(){
//     console.log(this.name + "and age is " +this.age)
//   }
// }
// let y={
//     city:"hyd"
// }
//   var x = 20;

// function add(){
// console.log(window.x)
// }
// add()

// const originalValue=[{
//   name:"ram",
//   age:27,
//   gender:"male"
// }]

// const copiedValue= {...originalValue};
// // console.log(originalValue);
// // console.log(copiedValue);
// copiedValue.name="samantha";
// console.log(originalValue);
// console.log(copiedValue);

// const user={
//   name:"ram",
//   age:26
// }

// const x={
//   male:"gender"
// }

// function innerFunction(){
//   let a=20
//   return function outerFunction(){
//     console.log(a)
//   }
//   innerFunction()
// }
// outerFunction

// function x(){
//   let a=20;
//   function y(){
//     console.log(a)
//   }
//   y()
// }
// x()
// const x = {
//   name: "ram",
//   age: 29,
//   getInfo:  () =>{
//     console.log(`my name is ${this.name} and age is ${this.age}`);
//   },
// };

// console.log(x);
// var a=20
// const x=()=>{
//   console.log(this.a)
// }
// x()


// const myPromise = new Promise((resolve, reject) => {
//   // Do some asynchronous operation
//   const success = true; // or false based on the operation

//   if (success) {
//     resolve("Operation succeeded!");
//   } else {
//     reject("Operation failed!");
//   }
// });


// const myPromise = new Promise((resolve, reject) => {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         // Handle HTTP errors (status code not in the range 200-299)
//         throw new Error("Network response was not ok");
//       }
//       return response.json(); // Return the JSON data as a promise
//     })
//     .then((data) => {
//       resolve(data); // Resolve the promise with the data
//     })
//     .catch((error) => {
//       reject(error); // Reject the promise with the error
//     });
// });

// myPromise
//   .then((data) => {
//     console.log("Data:", data); // Log the fetched data
//   })
//   .catch((error) => {
//     console.log("Error:", error); // Log any errors
//   });

async function add() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);


    if (!response.ok) {
      throw new Error("data is not fetching");
    }
    const data = await response.json();
    console.log(data);
  }
   catch(error){
    console.log(error)
   }
}

add();

// async function add() {
//   try {
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Data is not fetching"); // Throw an error if response is not OK
//     }

//     const data = await response.json(); // Parse the JSON data
//     console.log(data); // Log the data
//   } catch (error) {
//     console.error("Error fetching data:", error); // Log any errors
//   }
// }

// add();
console.log("error")
































































































