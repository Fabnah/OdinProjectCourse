const grid = document.querySelector(".grid")

let nuevoDiv;

for (let columns = 0; columns < 16; columns++) {
    let cont1 = document.createElement("div")
    cont1.setAttribute("style", "display: flex;flex-direction: row;")
    cont1.className = "cont1"
grid.appendChild(cont1)
    for (let rows = 0; rows < 16; rows++) {
        nuevoDiv = document.createElement("div")
        nuevoDiv.setAttribute("style", "height: 25px;width: 25px;background-color: white;border: 1px solid black;")
        nuevoDiv.className = "little"
        cont1.appendChild(nuevoDiv)

         nuevoDiv.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "black";
        });


    }
}
