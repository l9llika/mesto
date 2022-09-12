//** export validate functions */
import clearFormErrors from "./validate.js";
//** initial places from vendor */
import initialPlaces from "./data.js";
//** Card */
import Card from "./Card.js";
//** Popups in project */

//** Edit profile popup window */
const popupEdit = document.querySelector('.popup');
const buttonCloseEditForm = popupEdit.querySelector('.popup__close-btn');
const profileElement = document.querySelector('.profile');
const profileEditBtn = profileElement.querySelector('.profile__edit-btn');
let profileName = profileElement.querySelector('.profile__name');
let profileJob = profileElement.querySelector('.profile__about');
//** edit profile form */
const formElement = document.querySelector('.popup__form');
const nameInput = document.getElementById('popup_input-name');
const jobInput = document.getElementById('popup_input-job');

//** Image popup */
const imagePopup = document.querySelector('.popup_zoom');
const imagePopupLink = imagePopup.querySelector('.popup__zoom-image');
const imagePopupDescription = imagePopup.querySelector('.popup__zoom-descriprtion');
const imagePopupCloseBtn = imagePopup.querySelector('.popup__zoom-close-btn');
// add new place popup
const popupAddPlace = document.querySelector('.popup_add-place');
const popupAddPlaceCloseBtn = popupAddPlace.querySelector('.popup__close-btn');
const placeAddBtn = profileElement.querySelector('.profile__add-btn');
//** add new place form */
const placeAddFormElement = document.querySelector('.popup__add-form');
const placeInput = document.getElementById('popup_input-place');
const placeLinkInput = document.getElementById('popup_input-place-link');
const placeSubmitBtn = placeAddFormElement.querySelector('.popup__save-btn');
// reneder initial places in html
const placeElements = document.querySelector('.elements');

//** close popup by escape */
function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
//** close popup by overlay */
function closePopupByOverlay(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("popup__close-btn")
  ) {
    closePopup(evt.currentTarget);
  }
}

//** function for close and open popups */
let openPopup = function (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keyup", closePopupByEsc);
  popup.addEventListener("mousedown", closePopupByOverlay);
};
let closePopup = function (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keyup", closePopupByEsc);
  popup.removeEventListener("mousedown", closePopupByOverlay);
};


//** Edit information about profile */
function submitPopupForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}




// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ КАРТОЧКИ 

//** Create place function */
// const createPlace = function (place) {
//   // const placeTemplate = document.querySelector('.place-template').content.querySelector('.place').cloneNode(true);
//   const placeImage = placeTemplate.querySelector('.place__image');
//   placeImage.src = place.link;
//   placeImage.alt = place.name;
//   placeTemplate.querySelector('.place__name').textContent = place.name;

//   placeTemplate.querySelector('.place__choice-btn').addEventListener('click', likePlace);

//   placeTemplate.querySelector('.place__trash-btn').addEventListener('click', function (evt) {
//     placeTemplate.remove();
//   });
//   placeTemplate.querySelector('.place__image-btn').addEventListener('click', function (evt) {
//     imagePopupLink.src = place.link;
//     imagePopupLink.alt = place.name;
//     imagePopupDescription.textContent = place.name;
//     openPopup(imagePopup);
//   });
//   return placeTemplate;
// };
// ФУНКЦИЯ ОТКРЫТИЯ ПОЛНОГО РАЗМЕРА КАРТИНКИ
export default function handleCardClick(data) {
  imagePopupLink.src = data.link;
  imagePopupLink.alt = data.name;
  imagePopupDescription.textContent = data.name;
  openPopup(imagePopup);
}

// СОЗДАНИЕ НОВОЙ КАРТОЧКИ
function createPlace(data) {
  const elementItem = new Card(data, '.place-template', handleCardClick);
  const newCard = elementItem.generateCard();
  return newCard;
}
//ЦИКЛ ОБРАБОТКИ ВСЕХ МЕСТ И ВСТАВКА
initialPlaces.forEach((item) => {
  const placeItem = createPlace(item);
  placeElements.prepend(placeItem);
});



//   placeTemplate.querySelector('.place__image-btn').addEventListener('click', function (evt) {
//     openPopup(imagePopup);
//   });
// ВСТАВКА КАРТОЧКИ В НАЧАЛО СПИСКА
//** create places function */
const renderPlaces = function (place) {
  placeElements.prepend(place);
};

//** use initial places and render */
// initialPlaces.forEach((place) => {
//   const card = new Card(place, '.elements-item', handleCardClick);
//   const placeElement = card.generateCard();
//   document.querySelector('.elements').append(placeElement);
// });




//** Add new place from place add form*/
function submitAddPlacePopupForm(evt) {
  evt.preventDefault();
  const newPlace = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };
  const placeItem = createPlace(newPlace);
  renderPlaces(placeItem);
  closePopup(popupAddPlace);
  placeSubmitBtn.setAttribute('disabled', true);
  placeSubmitBtn.classList.add('popup__save-btn_disabled')
}





//** Event listeners */

//** open and close edit popup listeners */
profileEditBtn.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  clearFormErrors(popupEdit);
  openPopup(popupEdit);
});
buttonCloseEditForm.addEventListener('click', function () {
  closePopup(popupEdit);
});

//** Submit edit info event listener */
formElement.addEventListener('submit', submitPopupForm);

//** Сlose Image popup */
imagePopupCloseBtn.addEventListener('click', function () {
  closePopup(imagePopup);
});

//** open add new places popup */
placeAddBtn.addEventListener('click', function () {
  placeAddFormElement.reset();
  clearFormErrors(popupAddPlace);
  openPopup(popupAddPlace);
});

popupAddPlaceCloseBtn.addEventListener('click', function () {
  closePopup(popupAddPlace);
});

//** Submit add form listener  */
placeAddFormElement.addEventListener('submit', submitAddPlacePopupForm);