export const popupAddPlace = document.querySelector('.popup_add-place');
export const popupFormAdd = document.querySelector('.popup__add-form');
export const popupFormEdit = document.querySelector('.popup-edit-profile');
export const popupAvatarElement = document.querySelector('.popup_change-avatar');
export const profilePopup = document.querySelector(
  ".popup__form[name='changeProfile']"
);

export const popupAvatar = document.querySelector(
  ".popup__form[name='changeAvatar']"
);

export const popupPlace = document.querySelector(
  ".popup__form[name='createPlace']"
);

export const nameInput = popupFormEdit.querySelector('.popup__input-name');
export const jobInput = popupFormEdit.querySelector('.popup__input-job');
export const buttonEdit = document.querySelector('.profile__edit-btn');
export const buttonAdd = document.querySelector('.profile__add-btn');
export const placePopupOpenButton = document.querySelector(
  ".profile__add-btn"
);
export const openButtonChangeAvatar = document.querySelector(
  ".profile__edit-btn-avatar"
);
export const popupProfileOpenButton = document.querySelector(".profile__edit-btn");


export const profileSelectors = {
  name: ".profile__name",
  job: ".profile__about",
  avatar: ".profile__avatar",
  cardList: ".elements",
  loaderPopup: ".popup_loader",
  imagePopup: ".popup_zoom",
  confirmPopup: ".popup_confirmation",
  popupAvatar: ".popup_change-avatar",
  template: ".place-template",
  popupAddPlace: ".popup_add-place",
  popupFormEdit: ".popup-edit-profile",
  popupFormAdd: ".popup__add-form"
};


export const formAllSelectors = {
  form: '.popup__form',
  input: '.popup__input',
  button: '.popup__save-btn',
  buttonDisabled: 'popup__save-btn_disabled',
  inputError: 'popup__input_type_error',
  span: '.popup__error',
  template: '.place-template'
};


export const USER_TOKEN = "39a4caee-006a-46b7-a27f-18f6a879f957";
export const BASE_URL = "https://mesto.nomoreparties.co/v1/cohort-52";