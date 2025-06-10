// const employee = {
//     calctax() {
//         console.log("tax rate is 10%")
//     }
// };

// const karan = {
//     salary:5000,
// }
// karan.__proto__ = employee; // prototypes

// class toyatocar { //same template ke liye
//    constructor (brand,milegage) {
//     console.log("creating new object");
//     this.brand = brand;
//     this.milegage = milegage;
//    }

//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
//     // setbrand(Brand){
//     //     this.car = Brand;
//     // }
// }
// let fortuner = new toyatocar("fortuner",10);
// let texus = new toyatocar("texus",20);
// // texus.setbrand("lexus");

// class parent {
//     hello () {
//         console.log("hello my name");
//     }
// }
// class child extends parent {}   // inheritance
// let obj = new child();

// class person {
//   constructor() {
//     this.speceis = "homo sapiens"; // ya property sab child ke pass bhi hogi
//   }
//   sleep() {
//     console.log("sota hai");
//   }
//   eat() {
//     console.log("khata hai roj");
//   }
// }
// class Engineer extends person {
//   //engineer inherit karna chahiya person ko so be extend it
//   constructor(branch) {
//     super(); // to envoke parent constructor
//     this.branch = branch;
//   }

//   work() {
//     super.eat(); // phir pahela ye hoga
//     console.log("kaam bhi karta hai");
//   }
// }
// let nikkobj = new Engineer("chemical engineer");
// let engobj = new Engineer("chemical engineer");

// let Data = "secret information";
// class user {
//   constructor(name, email) {
//     this.name = name; //properties
//     this.email = email;
//   }
//   viewData() {
//     console.log(" website data =", Data); //student1.viewData() for constructor
//   }
// }

// class admin extends user {
//   constructor(name) {
//     super(name);
//   }

//   editData() {
//     Data = "some new data"; //admin1.editData(),Data
//   }
// }
// let student1 = new user("nikki", "nikki@123"); //student1
// let student2 = new user("sneha", "snehs@123");
// let admin1 = new admin("alakj"); //admin1


/**callback && promises */
// function getData(dataid,getnextData){
//     setTimeout(() => {
//         console.log("data",dataid);
//       if(getnextData) {
//         getnextData();}
//     }, 2000);
// }

// getData(1, () => {
//     getData(2)
// });



function getData(dataid,getnextData){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log("data",dataid);
                resolve("success");
             if(getnextData) {
                getnextData();}
           }, 2000);
        })
     }