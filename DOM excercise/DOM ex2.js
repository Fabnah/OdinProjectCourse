const inp1 = document.querySelector("#item");
const button = document.querySelector("button");
const ulist = document.querySelector("ul");

button.addEventListener("click", () => {
  if (inp1.value != "") {
    //creo li dentro de ul y le doy el valor del input
    let list = document.createElement("li");
    list.textContent = inp1.value;
    inp1.value = "";

    let li2 = document.createElement("li");
    let span = document.createElement("span");
    let but = document.createElement("button");

    li2.appendChild(span);
    li2.appendChild(but);

    span.textContent = list.textContent;
    but.textContent = "Delete";
    ulist.appendChild(li2);

    but.addEventListener("click", () => {
      ulist.removeChild(li2);
    });
  }
});
