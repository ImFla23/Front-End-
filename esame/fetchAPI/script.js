const list = document.getElementById("list");
const listElement = document.getElementsByClassName("list-item");


//funzioni per la lista
async function addItemList() {
  const dogUrl = await callDog();
  if (!dogUrl) return;

  const newItem = document.createElement("li");
  const newImg = document.createElement("img");
  newImg.src = dogUrl;

  const newID = listElement.length + 1;
  newItem.classList.add("list-item");
  newImg.classList.add("dog-img");
  newItem.innerHTML = "Item " + newID;
  newItem.onclick = () => changeColor(newItem);
  newItem.appendChild(newImg);
  list.appendChild(newItem);
}

function removeItemList() {
  list.lastChild.remove();
}

//funzione per il cambio colore div

function changeColor(element, color1 = "violet", color2 = "red") {
  if (!element) return;
  element.classList.toggle(color1);
  element.classList.toggle(color2);
  console.log("funziono", element);
}

async function callDog() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    if (!res.ok) {
        throw new Error("errore rilevato nella fetch:" + res.status)
    }
    const data = await res.json();
    return data.message;
  } catch (e) {
    console.error("errore durante il caricamento immagine", e)
  }
}
