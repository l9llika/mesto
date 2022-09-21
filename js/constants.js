export const classCreationSelectors = {
  userName: ".profile__name",
  userJob: ".profile__profession",
  profilePopup: ".profile__about",
  placePopup: ".popup_add-place",
  imagePopup: ".popup_zoom",
  cardList: ".place",
};

export const formAllSelectors = {
  form: ".popup__form",
  button: ".popup__save-btn",
  input: ".popup__input",
  inputTypeError: "popup__input_type_error",
  buttonDisabled: "popup__save-btn_disabled",
  popupError: ".popup__error",
  template: ".place-template",
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