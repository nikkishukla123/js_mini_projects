const student = {
    fullname : "neha shukla",
    age: 20,
    cgpa:9,
    ispass:true,

};

student["age"] = student["age"]+1;
console.log(student.age);
// create a constant bject called product to store information
const product = {
    title : "parker pen",
    color :'black',
    price : 270,
    offer : 5,
    rating : 5 ,

};
// console.log(product);
// create obj called profile to store instagram like profile
const profile = {
    username : "@shraddha",
    isfollow :true,
    numberofpost: 195,
    followers : 569,
};
//arithmetic operator
// let a = 5;
// let b= 2;
// console.log("a =",a, "& b =",b);
// console.log("a+b = ",a+b);
// console.log("a-b = ",a-b);
// console.log("a*b = ",a*b);
// console.log("a/b = ",a/b);
// console.log("a%b = ",a%b);
// console.log("a**b = ",a**b);

// comparison operator
// let a=5;
// let b=2;
// console.log("a == b",a == b);//false

   
//logical operator
// let a = 6;
// let b = 5;

// let cond1 = a>b;
// let cond2 = a == 6;
// console.log("cond1 && cond2 =",cond1 && cond2);

// let a = 6;
// let b = 5;
// console.log("cond1 || cond2 =",!(a < b));

// conditional
// let age = 20;
// if(age > 18){
//     console.log("you can vote");
// }else console.log("you cannot vote");

//ternary
// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);


// // get user to enter aprompt and check if number is multiple or not
// let num = prompt("enter a number");
// if(num % 5 === 0){
//     console.log("mathed");
// }else
// console.log("not mathed");

//loop,calculate sum
// let sum = 0;
// for(let i = 1; i <= 5; i++) {
//     sum=sum +i;
// }console.log("sum = ",sum);

//for-of loop
// let str = "apna neha";
// let size = 0;
// for(let val of str){
//     console.log("val=", val);
//     size++;
// }
// console.log("string size =",size);
 
//for in loop
// let stu = {
//     name: "nikki shukla",
//     age:20,
//     cgpa: 7.9,
//     ispass: true,
// };

// for(let i in stu) {
//     console.log(i);

//};

//Q print all even numbers from 0 to 100

//  for(i=0; i<=100; i++) {
//     if(i%2 === 0) {
//         console.log("i =",i);
//   }
//  };
 
//game question
// let gamenum = 25;
// let usernum = prompt("enter a number : ");
// while(usernum != gamenum){
//     usernum = prompt("enter a number again : ");
// }
// console.log("congrats,you entered a nmuber");

//strings
// let str = "apna college";
// let str2 = "shraddha"
// console.log(str[5])//c
// //template string 
// let obj = {
//     items:"pens",
//     price: 10,
// };
// let output = `the cost of ${obj.items} is ${obj.price} rupees`;//template string
// console.log(output);


// let str = " apna\tcollege ";
// console.log(str.length); //escape character
// let newstr= str.toUpperCase()//upper
// console.log(newstr);
// console.log(str.trim());
// console.log(str.slice(1,3));
// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(", ", str2, "!")); // Output: Hello, World!
// let str = "hello,world!";
// console.log(str,replace("world","everyone"));//replace the string


//prompt user to enter full name.generate a username
// let str1 = prompt("enter a username : ");
// let x = str1;
// console.log("@"+x+x.length);

//Arrays
// let marks = [97,82,90,50,60,23,56];
// console.log(marks);
// let heroes = ["ironman","thor","bheem","antman"]
// for(let i =0 ;i<heroes.length;i++);{
//     console.log(heroes);//using loop
// }
//for of
// let heroes = ["ironman","thor","bheem","antman"]
// for(let hero of heroes) {
//     console.log(hero);
// }

// for array find average class of entire class
// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
//     sum= sum + val;
// }
// let average = sum/marks.length;
// console.log(`average of the marks ${average}`);

//for given array all items have 10% off ,change array after appling offer
// let items = [250,645,300,900,50];
// for(let val of items){
//     offer= val / 10;
//     val = val - offer;
//     console.log(`changed array is ${val}`);
// }

// let fooditems = ["potato","apple","litchi"]
// console.log(fooditems);
// fooditems.push("aloo")//push
// fooditems.pop()//pop
// console.log(fooditems);

// let marvelheroes =["thor","spidy","batyman"];
// let dcheroes = ["superman","tonystark"];
// let heroes = marvelheroes.concat(dcheroes);
// console.log(heroes);
// marvelheroes.unshift("ant");
// console.log(marvelheroes.slice(0,2));

// let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// arr.splice(2,0,103);
// arr.splice(5,1);

// let companies = ["blommberg","microsoft","uber","google","ibm","netflix"];
 // companies.splice(0,1);//remove
 // companies.splice(1,1,"ola");// add and replace
// companies.push("amazon");//add at end

    /** FUNCTIONS  */
//     function myfunction(msg)  {
//         //parameter
//         console.log(msg);
//     }
//     myfunction("i love ❤️") //argument
// //function -> 2 numbers,sum
// function sum(x,y) {
//     console.log(x+y);
// }
// sum(1,2)

// function sum(x,y){ //local variable x y
//     s = x+y;
//     return s;
// }
// let val = sum(4,7);
// console.log(val);
// // modern js 
// const arrowsum = (a,b) => {
//     console.log(a+b);
// };
// //mul
// const arrowmul = (a,b) => {
//     console.log(a*b);
// };
// //for printing something
// const printhello = () => {
//     console.log("Hellokya");
// };

//create a function using function keyword thate takes string as an argument and returns the number of vowels
// function countvowels(str){
//     let count = 0;
// for (const char of str){
//     if(char == "a" || "e" || "i" || "o")
//         {
//         count++;
//     }
        
// }
// return count;

// }
//foreach array
// let arr = [1,2,3,4,5];

// arr.forEach((val,idx,arr) => {
//     console.log(val,idx,arr)
// });

//print square foreach arr
// let arr = [20,10,30];
// arr.forEach((val) => {
//     console.log(val*val)
// })

// let nums = [67,52,39]; // map
// nums.map((val) => {
//     console.log(val);
// });
// let nos = [67,52,90];
// let newarr = nums.map((val) => {
//     return val*val;
// });
// console.log(newarr);

// let arr = [1,2,3,4,5,6];
// let evenArr = arr.filter((val) => { // filter karega jo nahi chahiye
//          return val % 2 === 0 ;
//      });
//     console.log(evenArr);

// let arr = [1,2,3,4];

// const output = arr.reduce((res, curr) => { //reduce
//     return res + curr;
// });
// console.log(output); //10

//q.filter out marks of student that scored 90 +
let arra = [10,20,30,90,10,90];
let stuarr = arra.filter((val ) => {
return val == 90;

});
console.log(stuarr);