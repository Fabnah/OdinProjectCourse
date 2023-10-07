let screen = document.querySelector("#screen")
let number = document.querySelectorAll(".number")
let simbol = document.querySelectorAll(".simbol")
let equal = document.querySelector("#resultado")
let clearButton = document.querySelector("#clear")
let del = document.querySelector("#delete")
let deci = document.querySelector("#decimal")

// variables
let aux1 = ""
let showOp = ""
let contOp = 0;
let aux2 = ""
let final;



function sum(a, b) {
  return a + b
}
function rest(a, b) {
  return a - b
}
function mult(a, b) {
  return a * b
}
function div(a, b) {
  return a / b
}
function mod(a, b) {
  return a % b
}

function screenShow() {
  number.forEach((num) => {
    num.addEventListener("click", () => {
      if (contOp === 0) {
        screen.textContent += num.textContent;
        aux1 += num.textContent;
      } else {
        aux2 += num.textContent;
        screen.textContent += num.textContent;
      }
    });
  });

  simbol.forEach((simb) => {
    simb.addEventListener("click", () => {

      if (contOp === 0){
      screen.textContent = ""
      showOp += simb.textContent;
      contOp++;
    } else{
      screen.textContent = ""
      aux1 = parseFloat(aux1)
      aux2 = parseFloat(aux2)
      final = operator(aux1, showOp, aux2)
      screen.textContent = final
      aux1 = final
      aux2 = ""
      showOp = simb.textContent
      screen.textContent = "";
    }
  }
)}

)

res()


}

function res() {
  equal.addEventListener("click", () => {
    if (aux1 !== "" && aux2 !== "" && showOp !== "") {
      aux1 = parseFloat(aux1);
      aux2 = parseFloat(aux2);
      final = operator(aux1, showOp, aux2);
      screen.textContent = final;
      aux1 = final;
      aux2 = "";
      showOp = "";
      contOp = 0;
    }
  });
}

function operator(num1, op, num2) {

  let resultado;
  switch (op) {
    case "/":
      resultado = div(num1, num2)
      break
    case "*":
      resultado = mult(num1, num2)
      break
    case "-":
      resultado = rest(num1, num2)
      break
    case "+":
      resultado = sum(num1, num2)
      break
    case "%":
      resultado = mod(num1, num2)
      break
  }
  return resultado
}


function clear() {
  clearButton.addEventListener("click", ()=>{
    screen.textContent = "";
    aux1 = ""
    aux2 = ""
    showOp = ""
    contOp = 0
  })
}

function delet() {
  del.addEventListener("click", ()=>{
      if (contOp === 0) {
        aux1 = aux1.slice(0, -1)
        screen.textContent = screen.textContent.slice(0, -1)
      } else {
        aux2 = aux2.slice(0, -1)
        screen.textContent = screen.textContent.slice(0, -1)
      }
    
  })
}



// llamada a las funciones
screenShow()
clear()
delet()
deci.addEventListener("click", () =>{
  if (contOp === 0) {
    aux1 += "."
    screen.textContent = aux1
  } else {
    aux2 += "."
    screen.textContent = aux2
  }
})