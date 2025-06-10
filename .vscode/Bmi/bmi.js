const form = document.querySelector('form');
// this usecase will give you empty
form.addEventListener("submit",function (e){
   e.preventDefault();

   const height = parseInt(document.querySelector("#height").value);
   const weight = parseInt(document.querySelector("#weight").value);
 const results = document.querySelector('#result');
 if(height === " " || height<0 || isNaN(height)) {
    results.innerHTML = `please give valid height ${height}`
 } else if(weight === " " || weight<0 || isNaN(weight)) {
    results.innerHTML = `please give valid weight ${weight}`
 } else{
    const bmi = (weight/((height * height )/ 10000)).toFixed(3);
    results.innerHTML = `${bmi}`
    if (bmi < 18){
        results.innerHTML = `underweight ${bmi}`;
    } else if (bmi >= 18 || bmi <= 24.9) {
        results.innerHTML = `normal range ${bmi}`;
    }if (bmi > 24.9){
        results.innerHTML = `moti bhas ${bmi}`;
    }
 }

});
// digital clock

// const clock = document.querySelector("#clock");
//  setInterval(function(){
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());
//     clock.innerHTML = (date.toLocaleTimeString());
//  },1000);

