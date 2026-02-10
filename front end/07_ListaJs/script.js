const list = document.getElementById("list");
const listElement = document.getElementsByClassName("list-item");
const divChangeColor = document.querySelector(".change-color");

function colorCycle() {
  let i = 1;
  for (const Element of list.children) {
    if (Element.classList.contains("green") || Element.classList.contains('yellow')) {
        i++
      continue;
    }
    console.log('ciao sono la ', i)
    if (i % 2 === 0) {
      Element.classList.add("yellow");
    } else {
      Element.classList.add("green");
    }
    
    Element.onclick = () => changeColor("green", "yellow", Element);

    i++;
  }
}

//funzioni per la lista
function addItemList() {
  let newItem = document.createElement("li");
  let newID = listElement.length + 1;
  newItem.classList.add("list-item");
  newItem.innerHTML = "Item " + newID;
  list.appendChild(newItem);
  colorCycle()
}

function removeItemList() {
  list.lastChild.remove();
}

//funzione per il cambio colore div

function changeColor(color1 = "violet", color2 = "red", element = divChangeColor) {
  element.classList.toggle(color1);
  element.classList.toggle(color2);
  console.log('ciaop')
}

colorCycle()
