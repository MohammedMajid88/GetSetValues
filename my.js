
// const Calculate = document.getElementById("Calculate");
// const select = document.querySelector("select");
// const main = document.querySelector("main");

// const result = 0


// Calculate.addEventListener('click')  {

// }

// const input1 = document.getElementById('input1');

// input1.addEventListener('input1' , oninputchange);

// const input2 = document.getElementById('input2');

// input2.addEventListener('input2' , oninputchange);


// function myFunction() {
//     document.getElementById("value1").value = "";
//   }


// function oninputchange(event) {
//     alert(`${event.target.id}); ${event.target.value}`);
// }

//   Calculate.onclick = function() {
//     main.value1.result()
 
// };






let val1=document.querySelector("#value1");
let val2=document.querySelector("#value2");
let result=document.querySelector("#result");
let select=document.querySelector("select");
let btn=document.querySelector("button")
btn.addEventListener("click",function(){
let opreater= select.options[select.selectedIndex].value;
console.log(typeof(opreater))


    let  operators = {
        '+': function(a, b){ return a+b},
        '-': function(a, b){ return a-b},
        '*': function(a, b){ return a*b},
        '/': function(a, b){ return a/b}
    }

    result.value = operators[opreater](+val1.value , +val2.value);
})