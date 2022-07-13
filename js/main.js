//  funtion for like button
const placeChoice = document.querySelectorAll('.place__choice');

[].forEach.call(placeChoice, function (placeChoice) {
  placeChoice.addEventListener('click', function () {
    placeChoice.classList.toggle('place__choice_active');
  });
});


//** function for close and open popupform */
const popupElement = document.querySelector('.popup');
const popupCloseBtn = popupElement.querySelector('.popup__close-btn');
const profileElement = document.querySelector('.profile');
const profileEditBtn = profileElement.querySelector('.profile__edit-btn');
let profileName = profileElement.querySelector('.profile__name');
let profileJob = profileElement.querySelector('.profile__about');

let openPopup = function () {
  popupElement.classList.add('popup_opened');
  //** display profile information in popup form */
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
let closePopup = function () {
  popupElement.classList.remove('popup_opened');
}


//** edit information about profile */
const formElement = document.querySelector('.popup__form');
const nameInput = document.getElementById('popup_input-name');
const jobInput = document.getElementById('popup_input-job');

function submitPopupForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', submitPopupForm);

//** open and close popup listeners */
profileEditBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

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
// reneder initial places in html
const placeElements = document.querySelector('.elements')

initialPlaces.forEach(function (place) {
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
  placeElements.appendChild(placeTemplate);
});

// open create new places popup
const popupAddPlace = document.querySelector('.popup__add-place');
const popupAddPlaceCloseBtn = popupAddPlace.querySelector('.popup__close-btn');
const placeAddBtn = profileElement.querySelector('.profile__add-btn');
console.log(popupAddPlaceCloseBtn);

let openAddPopup = function () {
  popupAddPlace.classList.add('popup_opened');
}
let closeAddPopup = function () {
  popupAddPlace.classList.remove('popup_opened');
}

placeAddBtn.addEventListener('click', openAddPopup);
popupAddPlaceCloseBtn.addEventListener('click', closeAddPopup);