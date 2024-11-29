let secondNo = document.getElementById("secondNo");
let firstNo = document.getElementById("firstNo");
let submit = document.getElementById("submit");
let header = document.getElementById("header");

let h3 = document.querySelector("h3");
let result ;
submit.addEventListener("click", () =>{
    let fno = parseFloat(firstNo.value);
    let sno = parseFloat(secondNo.value);

    if (isNaN(fno) || isNaN(sno)) {
        h3.innerText = "Please enter valid numbers!";
        setTimeout(() => {
            h3.innerText = "";
        },1000);
        return;
    }

     result = fno * sno;
  h3.innerText = "Result :  " + result;  
//   setTimeout(() => {
//     h3.innerText = "";
//   }, 1000); 
}, 1000);
header.innerHTML = `<h1>Result :  ${result}</h1>`;
