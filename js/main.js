//** Popups in project */

//** Edit profile popup window */
const popupElement = document.querySelector('.popup');
const popupCloseBtn = popupElement.querySelector('.popup__close-btn');
const profileElement = document.querySelector('.profile');
const profileEditBtn = profileElement.querySelector('.profile__edit-btn');
let profileName = profileElement.querySelector('.profile__name');
let profileJob = profileElement.querySelector('.profile__about');
//** edit profile form */
const formElement = document.querySelector('.popup__form');
const nameInput = document.getElementById('popup_input-name');
const jobInput = document.getElementById('popup_input-job');

//** Image popup */
const imagePopup = document.querySelector('.image-popup');
const imagePopupLink = imagePopup.querySelector('.image-popup__image');
const imagePopupDescription = imagePopup.querySelector('.image-popup__descriprion');
const imagePopupCloseBtn = imagePopup.querySelector('.image-popup__close-btn');

// add new place popup
const popupAddPlace = document.querySelector('.popup_add-place');
const popupAddPlaceCloseBtn = popupAddPlace.querySelector('.popup__close-btn');
const placeAddBtn = profileElement.querySelector('.profile__add-btn');
//** add new place form */
const addPlaceFormElement = document.querySelector('.popup__add-form');
const placeInput = document.getElementById('popup_input-place');
const placeLinkInput = document.getElementById('popup_input-place-link');

// reneder initial places in html
const placeElements = document.querySelector('.elements')

// initial places from vendor
const initialPlaces = [{
    name: 'Монблан',
    link: './images/monblanc.jpg'
  },
  {
    name: 'Аликанте',
    link: './images/alicante.jpg'
  },
  {
    name: 'Ай-Петри',
    link: './images/aipetri.jpg'
  },
  {
    name: 'Берхофен замок в Швейцарии',
    link: './images/berhofen.jpg'
  },
  {
    name: 'Анталья',
    link: './images/goynuk.jpg'
  },
  {
    name: 'Алтай Катунь',
    link: './images/altay.jpg'
  },
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  }, {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  }, {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  }, {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  }, {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  }, {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//** function for close and open popups */
let openPopup = function (popup) {
  popup.classList.add('popup_opened');
};
let closePopup = function (popup) {
  popup.classList.remove('popup_opened');
};


//** Edit information about profile */
function submitPopupForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupElement);
}


//** Create place function */
const createPlace = function (place) {
  const placeTemplate = document.querySelector('.place-template').content.querySelector('.place').cloneNode(true);
  placeTemplate.querySelector('.place__name').textContent = place.name;
  placeTemplate.querySelector('.place__image').src = place.link;
  placeTemplate.querySelector('.place__image').alt = place.name;
  placeTemplate.querySelector('.place__choice-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('place__choice-btn_active');
  });
  placeTemplate.querySelector('.place__trash-btn').addEventListener('click', function (evt) {
    placeTemplate.remove();
  });
  placeTemplate.querySelector('.place__image-btn').addEventListener('click', function (evt) {
    imagePopupLink.src = place.link;
    imagePopupLink.alt = place.name;
    imagePopupDescription.textContent = place.name;
    openPopup(imagePopup);
  });
  return placeTemplate;
};

//** create places function */
const renderPlaces = function (place) {
  placeElements.prepend(place);
};

//** use initial places and render */
initialPlaces.forEach(function (place) {
  const placeItem = createPlace(place);
  renderPlaces(placeItem);
});

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
}
//** Event listeners */

//** open and close edit popup listeners */
profileEditBtn.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupElement);
});
popupCloseBtn.addEventListener('click', function () {
  closePopup(popupElement);
});

//** Submit edit info event listener */
formElement.addEventListener('submit', submitPopupForm);

//** Сlose Image popup */
imagePopupCloseBtn.addEventListener('click', function () {
  closePopup(imagePopup);
});

//** open add new places popup */
placeAddBtn.addEventListener('click', function () {
  openPopup(popupAddPlace);
});
popupAddPlaceCloseBtn.addEventListener('click', function () {
  closePopup(popupAddPlace);
});

//** Submit add form listener  */
addPlaceFormElement.addEventListener('submit', submitAddPlacePopupForm);