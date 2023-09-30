const grid = document.querySelector(".grid")
const clean = document.querySelector(".clean-btn")
const erase = document.querySelector(".erase-btn")
const color = document.querySelector(".color-btn")
const gridSize = document.querySelector(".gridSize")
const slideBar = document.querySelector(".slide-bar")


//variable para detectar el mouse en los botones clean y color
let mousedown = false


//funcionalidad del slidebar y gridSize
gridSize.textContent = slideBar.value + " x " + slideBar.value
let num = slideBar.oninput = function(){
    gridSize.textContent = this.value + " x " + this.value;
    
}


//funcionalidad al grid

// Función para crear el grid
function createGrid(size) {

    // Elimina los elementos anteriores del grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    // Crea el nuevo grid
    let nuevoDiv;

    for (let columns = 0; columns < size; columns++) {
        
        for (let rows = 0; rows < size; rows++) {
            nuevoDiv = document.createElement("div");
            nuevoDiv.setAttribute("style", "height: 1fr;width: 1fr;background-color: white;border: 1px solid black;");
            grid.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat (${size}, 1fr);`)
            nuevoDiv.className = "little";
            grid.appendChild(nuevoDiv);

            nuevoDiv.addEventListener("mouseenter", function() {
                this.style.backgroundColor = "black";
            });
        }
    }
}

// Inicializa el grid con el valor actual del control deslizante
createGrid(slideBar.value);

// Agrega un evento al control deslizante para actualizar el grid en tiempo real
slideBar.addEventListener("input", function() {
    createGrid(this.value);
});


//funcionalidad al boton clean
clean.addEventListener("click", ()=>{
   let little = document.querySelectorAll(".little")
   little.forEach(div => {
    div.style.backgroundColor = "white"
   });
})

//funcionalidad al boton erase
erase.addEventListener("click", ()=>{
    mousedown = true
    const littleDivs = document.querySelectorAll(".little");
    
    littleDivs.forEach(div => {
        div.addEventListener("mouseenter", () =>{
            if (mousedown) {
                div.style.backgroundColor = "white"
            }
        })
    });

    }
)

//funcionalidad de colores
color.addEventListener("click", ()=>{
    mousedown = false

    const littleDivs = document.querySelectorAll(".little")
    littleDivs.forEach(div =>{
        div.addEventListener("mouseenter", () =>{
            if (mousedown == false) {
                div.style.backgroundColor = color.value
            }
        })
    })
})