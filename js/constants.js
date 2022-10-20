export const popupFormAdd = document.querySelector('.popup__add-form');
export const popupFormEdit = document.querySelector('.popup-edit-profile');
export const nameInput = popupFormEdit.querySelector('.popup_input-name');
export const jobInput = popupFormEdit.querySelector('.popup_input-job');
export const buttonEdit = document.querySelector('.profile__edit-btn');
export const buttonAdd = document.querySelector('.profile__add-btn');

export const profileSelectors = {
  name: ".profile__name",
  job: ".profile__about"
};


export const formAllSelectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};



export const initialPlaces = [{
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