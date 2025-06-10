let string = " ";
let buttons = document.querySelectorAll(".button");

let history = [];

function updatehistory(){
   const historyelem = document.querySelector(".history");
   historyelem.innerHTML = history.join();

}

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
      history.push(string);
      updatehistory();
    } 
    else if (e.target.innerHTML == "clear") {
      string = " ";
      document.querySelector("input").value = string;
    } 
    else if (e.target.innerHTML == "←") {
      string = string.slice(0, -1); //remove the last chracter
      document.querySelector("input").value = string;
    }
     else if (e.target.innerHTML == "✓") {
      string = Math.sqrt(eval(string)).toString();
      document.querySelector("input").value = string;
    } 
    else if (e.target.innerHTML == "^") {
        string += '**'
        document.querySelector("input").value = string;
      }  
      else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
