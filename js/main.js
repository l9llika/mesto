//  funtion for like button
const placeChoice = document.querySelectorAll('.place__choice');



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
const imagePopup = document.querySelector('.image-popup');
const imagePopupLink = imagePopup.querySelector('.image-popup__image');
const imagePopupDescription = imagePopup.querySelector('.image-popup__descriprion');
const imagePopupCloseBtn = imagePopup.querySelector('.image-popup__close-btn');

// open and close image popup
let openImagePopup = function () {
  imagePopup.classList.add('image-popup_opened');
}
let closeImagePopup = function () {
  imagePopup.classList.remove('image-popup_opened');
}

imagePopupCloseBtn.addEventListener('click', closeImagePopup);

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
  placeTemplate.querySelector('.place__image-btn').addEventListener('click', function (evt) {
    imagePopupLink.src = place.link;
    imagePopupLink.alt = place.name;
    imagePopupDescription.textContent = place.name;
    openImagePopup();
  });

  placeElements.appendChild(placeTemplate);
});


// open new places popup
const popupAddPlace = document.querySelector('.popup__add-place');
const popupAddPlaceCloseBtn = popupAddPlace.querySelector('.popup__close-btn');
const placeAddBtn = profileElement.querySelector('.profile__add-btn');

let openAddPopup = function () {
  popupAddPlace.classList.add('popup_opened');
}
let closeAddPlacePopup = function () {
  popupAddPlace.classList.remove('popup_opened');
}

placeAddBtn.addEventListener('click', openAddPopup);
popupAddPlaceCloseBtn.addEventListener('click', closeAddPlacePopup);

// add new place card
const addPlaceFormElement = document.querySelector('.popup__add-form');
const placeInput = document.getElementById('popup_input-place');
const placeLinkInput = document.getElementById('popup_input-place-link');

function submitAddPlacePopupForm(evt) {
  evt.preventDefault();
  const newPlace = {
    name: placeInput.value,
    link: placeLinkInput.value,
  };
  const placeTemplate = document.querySelector('.place-template').content.querySelector('.place').cloneNode(true);
  placeTemplate.querySelector('.place__name').textContent = newPlace.name;
  placeTemplate.querySelector('.place__image').src = newPlace.link;
  placeTemplate.querySelector('.place__image').alt = newPlace.name;
  placeElements.prepend(placeTemplate);
  closeAddPlacePopup();
};

// function submitAddPlacePopupForm(evt) {
//   evt.preventDefault();
//   const newPlace = [{
//     name: placeInput.value,
//     link: placeLinkInput.value,
//   }];
//   initialPlaces.push(newPlace);
//   closeAddPlacePopup();
//   console.log(initialPlaces);
// };

// function createNewPlace ()

addPlaceFormElement.addEventListener('submit', submitAddPlacePopupForm);