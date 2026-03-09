const AddButton = document.querySelector(".add-button");
const TranslucentClose = document.querySelector(".translucent-close-div");
const addDiv = document.querySelector(".add-popup");
const nameFilm = document.querySelector(".nameFilm");
const reviewFilm = document.querySelector(".reviewFilm");
const imageFilm = document.querySelector(".ImageFilm");
const centerDiv = document.querySelector(".center-div");
const writtenReviewFilm = document.querySelector(".writtenReview");
const littleSuggestion = document.querySelector(".little-suggest-div");

//contatore per dare un id alle card (che si resetterà ad ogni riavvio del sito)
let count = 1;

addDiv.addEventListener("click", (e) => {
  e.stopPropagation();
});

function openPopUpDelete(cardPadre) {
  const popUpDelete = document.createElement("div");
  const deleteText = document.createElement("h2");
  const divButtonDelete = document.createElement("div");
  const buttonCancel = document.createElement("button");
  const buttonConfirm = document.createElement("button");
  const trasnluceDiv = document.createElement("div");

  trasnluceDiv.appendChild(popUpDelete);
  // per evitare che i click dentro il popup

  popUpDelete.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  popUpDelete.append(deleteText, divButtonDelete);
  divButtonDelete.append(buttonCancel, buttonConfirm);
  popUpDelete.classList.add("popup-delete-padre");
  deleteText.classList.add("delete-title");
  divButtonDelete.classList.add("delete-button-div");
  buttonCancel.classList.add("button-cancel");
  buttonConfirm.classList.add("button-confirm");
  trasnluceDiv.classList.add("translucent-delete-film-div");
  buttonCancel.innerText = "Cancel";
  buttonConfirm.innerText = "Delete";
  deleteText.textContent = "Are you sure to delete this film review?";

  centerDiv.appendChild(trasnluceDiv);

  buttonCancel.onclick = () => {
    popUpDelete.classList.add("close-popUp");
    setTimeout(() => {
      trasnluceDiv.classList.add("close-divs");
      popUpDelete.remove();
      trasnluceDiv.remove();
    }, 500);
    return;
  };

  trasnluceDiv.onclick = () => {
    popUpDelete.classList.add("close-popUp");
    setTimeout(() => {
      trasnluceDiv.classList.add("close-divs");
      popUpDelete.remove();
      trasnluceDiv.remove();
    }, 500);
    return;
  };

  buttonConfirm.onclick = () => {
    cardPadre.remove();
    count--;
    updateNumberCard();
    popUpDelete.classList.add("close-popUp");
    setTimeout(() => {
      trasnluceDiv.classList.add("close-divs");
      popUpDelete.remove();
      trasnluceDiv.remove();
    }, 500);
    return;
  };
}

function updateNumberCard() {
  const cards = document.querySelectorAll(".card-padre");

  cards.forEach((card, index) => {
    const countCard = card.querySelector(".count-text");
    countCard.innerHTML = `${index + 1}°`;
  });
}

function showPopUp() {
  TranslucentClose.classList.toggle("close-divs");
}

function closePopUp() {
  addDiv.classList.add("close-popUp");
  setTimeout(() => {
    TranslucentClose.classList.add("close-divs");
    addDiv.classList.remove("close-popUp");
  }, 400);
}

function addFilm() {
  const valueNameFilm = nameFilm.value;
  const valueReViewFilm = parseInt(reviewFilm.value, 10);
  const valueWrittenReviewFilm = writtenReviewFilm.value;
  const valueimageFilm = imageFilm.value;

  //creo gli elementi
  const cardPadre = document.createElement("div");
  const divImmagine = document.createElement("img");
  const flexTitoloRecensione = document.createElement("div");
  const titoloFilm = document.createElement("h3");
  const recensioneFilm = document.createElement("div");
  const recensioneScrittaFilmDiv = document.createElement("div");
  const recensioneScrittaFilm = document.createElement("p");
  const countDiv = document.createElement("div");
  const countText = document.createElement("p");
  const trahBinButton = document.createElement("button");

  //appendo figli, classi e cose varie per creare la card carina
  centerDiv.appendChild(cardPadre);
  cardPadre.classList.add("card-padre");
  recensioneScrittaFilmDiv.appendChild(recensioneScrittaFilm);
  flexTitoloRecensione.append(
    titoloFilm,
    recensioneFilm,
    recensioneScrittaFilmDiv,
  );
  cardPadre.append(divImmagine, flexTitoloRecensione, countDiv, trahBinButton);
  countDiv.appendChild(countText);
  countDiv.classList.add("count-div");
  countText.classList.add("count-text");
  flexTitoloRecensione.classList.add("flex-title-review");
  divImmagine.classList.add("film-image");
  titoloFilm.classList.add("film-title");
  recensioneFilm.classList.add("film-review");
  recensioneScrittaFilm.classList.add("review-text");
  recensioneScrittaFilmDiv.classList.add("review-text-div");
  trahBinButton.classList.add("Trash-bin-div");

  divImmagine.setAttribute("src", valueimageFilm);
  updateNumberCard();
  count++;
  titoloFilm.innerText = valueNameFilm;
  recensioneScrittaFilm.innerText = valueWrittenReviewFilm;
  trahBinButton.innerHTML = `<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="#aa7d8d" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>
`;
  trahBinButton.onclick = () => {
    openPopUpDelete(cardPadre);
  };

  //aggiungo la classe al suggestion div cosi da non mostrarlo più

  if (!littleSuggestion.classList.contains("close-suggestion")) {
    littleSuggestion.classList.add("close-suggestion");
    centerDiv.style.flexDirection = "Column";
    centerDiv.style.gap = "20px";
    centerDiv.style.justifyContent = "flex-start";
    centerDiv.style.paddingTop = "12vh";
  }

  for (let i = 1; i <= valueReViewFilm; i++) {
    recensioneFilm.innerHTML += ` <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#aa7d8d"
        viewBox="0 0 24 24"
      >
        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
      </svg>
    `;
    if (i === 5) break;
  }

  //resetto gli input
  nameFilm.value = "";
  reviewFilm.value = "";
  imageFilm.value = "";
  writtenReviewFilm.value = "";
  closePopUp();
}
