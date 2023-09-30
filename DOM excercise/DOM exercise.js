document.addEventListener("DOMContentLoaded", function() {

    const container = document.querySelector('#container')


const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const ptag1 = document.createElement("p")
ptag1.classList.add("p1")
ptag1.textContent = "Hey, I'm red!"
ptag1.style.color = "red";
container.appendChild(ptag1)

const h3tag = document.createElement("h3")
h3tag.classList.add("h3-blue")
h3tag.textContent = "I'm blue h3"
h3tag.setAttribute("style", "color: blue;");
container.appendChild(h3tag)

const divCont = document.createElement("div")
divCont.setAttribute("style", "border: 1px solid black; background-color: pink");
container.appendChild(divCont)

const h1tag = document.createElement("h1")
h1tag.textContent = "I'm in a div"
divCont.appendChild(h1tag);

const ptag2 = document.createElement("p")
ptag2.textContent = "Me too"
divCont.appendChild(ptag2)

})

