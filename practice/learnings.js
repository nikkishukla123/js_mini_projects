// console.dir(document.body);
// let heading = document.getElementById("hello");// using id
// console.dir(heading);
// let heading = document.getElementsByClassName("hello");//using class
// console.dir(heading);
// console.log(heading);
// let parahs = document.getElementsByTagName("p") // tag ke naam sa
// console.dir(parahs);
// let elements = document.querySelector("p");
// console.dir(elements);// 1st element
// let allelements = document.querySelectorAll("p");
// console.dir(allelements);// all element
// console.dir(document.body.firstChild);

// let h2 = document.querySelector("h2") //used for printing inner text
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from apna college";

// let divs = document.querySelectorAll(".box")
// console.dir(divs);
// console.log(divs[0])//individual divs ke liye
// divs[0].innerText = "neu uniwuoscn"

// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id"); // to acess the attribute value
// console.log(id);
// let name = div.getAttribute("name"); // to acess the attribute value
// console.log(name);
// let para= document.querySelector("p");//paragraph attribute value
// console.log(para.setAttribute("class", "newclass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "yellow"; // change the div
// div.style.fontSize = "20px";
// div.innerText = "hello!";

// let newbtn = document.createElement("button")
// newbtn.innerText = "clickme";
// console.log(newbtn)
// let div = document.querySelector("div");
// div.after(newbtn);// adding element after before for node
// let newheading = document.createElement("h1"); // adding new heading in page
// newheading.innerHTML = "he i am a boss";
// document.querySelector("body").prepend(newheading);

// let btn = document.createElement("button")
// btn.innerText = "danger";
// document.querySelector("body").prepend(btn)

//qs 2
// let para = document.querySelector("p");
// // console.log(para.setAttribute("class", "newclass")) // OR
// para.classList.add("newclass") //use class list

//**        EVENTS   ** //

// let btn1 = document.querySelector("#btn1")
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a =25;
//     a++;
//     console.log(a)
// }

// let btn2 = document.querySelector("btn2")
// btn2.dblclick =() => {
//     console.log("btn2 was clicked double times");
// }
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console .log("you are inside div");
// }


// btn1.onclick = (e) => { //event type
//     console.log(e);
//     console.log(e.type)
//     console.log(e.target) 
//     console.log(e.clientX,e.clientY)

// }
// let btn1 = document.querySelector("#btn1") //event listener
// btn1.addEventListener("click", () => {
//     console.log("buttun one was clicked");  
// });
// btn1.addEventListener("click", () => {
//     console.log("buttun one was clicked - handler 2");
// });

//q. for interchanging light and dark mode with button
// let btn = document.querySelector("#mode");
// let currmode = "light";
// btn.addEventListener("click", () =>{
// if(currmode === "light"){
//     currmode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
// }else{
//     currmode = "light"
//     document.querySelector("body").style.backgroundColor = "white";
// }
// console.log(currmode);
// });

// to do
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
