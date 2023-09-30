const grid = document.querySelector(".grid");
const clean = document.querySelector(".clean-btn");
const erase = document.querySelector(".erase-btn");
const color = document.querySelector(".color-btn");
const gridSize = document.querySelector(".gridSize");
const slideBar = document.querySelector(".slide-bar");

//variable para detectar el mouse en los botones clean y color
let mousedown = false;
let nuevoDiv;

//funcion para mostrar el valor del slidebar
function slideFunc() {
  //funcionalidad del slidebar y gridSize
  gridSize.textContent = slideBar.value + " x " + slideBar.value;
  (slideBar.oninput = function () {
    gridSize.textContent = this.value + " x " + this.value;
  });
}

//Función para crear el grid
function createGrid(size) {
  // Elimina los elementos anteriores del grid reseteando los valores
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  // Crea el nuevo grid
  for (let columns = 0; columns < size; columns++) {
    for (let rows = 0; rows < size; rows++) {
      nuevoDiv = document.createElement("div");
      nuevoDiv.setAttribute(
        "style",
        "height: 1fr;width: 1fr;background-color: white;border: 1px solid black;"
      );
      grid.setAttribute(
        "style",
        `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat (${size}, 1fr);`
      );
      nuevoDiv.className = "little";
      grid.appendChild(nuevoDiv);

      //llamada de la funcion para colorear al inicio
      colorDivs(nuevoDiv)
    }
  }
}

//funcion para colorear los divs al inicio (va dentro de createGrid)
function colorDivs(divs) {
    document.body.onmousedown = () => (mousedown = true)
    document.body.onmouseup = () => (mousedown = false)

    divs.addEventListener("mouseenter", function () {
        this.style.backgroundColor = color.value;
            
        }); 
    }



//funcion que actualiza el valor del grid llamando a la funcion createGrid
function realTimeBar() {
    slideBar.addEventListener("input", function () {
        createGrid(this.value);
      });
}

//funcionalidad al boton clean
function cleanBtn() {
    clean.addEventListener("click", () => {
        let little = document.querySelectorAll(".little");
        little.forEach((div) => {
          div.style.backgroundColor = "white";
        });
      });
}

//funcionalidad al boton erase
function eraseBtn() {
    erase.addEventListener("click", () => {
        mousedown = true;
        const littleDivs = document.querySelectorAll(".little");
      
        littleDivs.forEach((div) => {
          div.addEventListener("mouseenter", () => {
            if (mousedown) {
              div.style.backgroundColor = "white";
            }
          });
        });
      });
}



//llamadas a las funciones
slideFunc();
realTimeBar()
createGrid(slideBar.value);
cleanBtn()
eraseBtn()
