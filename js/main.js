//** import css file */
// import '../pages/index.css';
//** Card */
import Card from "./Card.js";
//** FormValidator */
import FormValidator from "./FormValidator.js";
//** Section */
import Section from "./Section.js";
//** UserInfo */
import UserInfo from "./UserInfo.js";
//** PopUp with form */
import PopupWithForm from "./PopupWithForm.js";
//** PopUp with image */
import PopupWithImage from "./PopupWithImage.js";

import {
  initialPlaces
} from "./constants.js";

import {
  formAllSelectors,
  profileSelectors,
  popupFormAdd,
  popupFormEdit,
  nameInput,
  jobInput,
  buttonEdit,
  buttonAdd
} from "./constants.js";


import {
  profilePopup,
  popupForm,
  popupProfileOpenButton,
  profileSubmitButton,
  popupPlace,
  placePopupOpenButton,
  popupPlaceForm,
  buttonPlaceSubmit
} from "./domElements.js";



//** СОЗДАНИЕ НОВОЙ КАРТОЧКИ */ 
function createCard(cardData) {
  const newCard = new Card({
      name: cardData.name,
      link: cardData.link
    },
    '.place-template',
    imagePopup.open.bind(imagePopup));
  return newCard.generateCard();
}


//НОВЫЙ КЛАСС СЕКЦИИ МЕСТ И ВСТАВКА В РАЗМЕТКУ
const cardSection = new Section({
    items: initialPlaces,
    renderer: (item) => cardSection.addItem(createCard(item))
  },
  ".elements"
);


const handleProfileFormSubmit = (formAllSelectors) => {
  userInfo.setUserInfo(formAllSelectors.nameInput, formAllSelectors.jobInput);
  popupEdit.close();
}

const handleCardFormSubmit = (formAllSelectors) => {
  cardSection.addItem(createCard(formAllSelectors));
  popupAdd.close();
}


const imagePopup = new PopupWithImage(".popup_zoom");
const popupEdit = new PopupWithForm(".popup-edit-profile", handleProfileFormSubmit);
const popupAdd = new PopupWithForm(".popup_add-place", handleCardFormSubmit);
const userInfo = new UserInfo({
  name: profileSelectors.name,
  job: profileSelectors.job
});
const formEditValidator = new FormValidator(formAllSelectors, popupFormEdit);
const formAddValidator = new FormValidator(formAllSelectors, popupFormAdd);


function handleEditProfileButtonClick() {
  popupEdit.open();
  const userInfoObj = userInfo.getUserInfo();
  nameInput.value = userInfoObj.name;
  jobInput.value = userInfoObj.job;
  formEditValidator.resetValidation();
}








function handleAddCardButtonClick() {
  popupAdd.open();
  formAddValidator.resetValidation();
}

buttonEdit.addEventListener('click', handleEditProfileButtonClick);
buttonAdd.addEventListener('click', handleAddCardButtonClick);

imagePopup.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();

formEditValidator.enableValidation();
formAddValidator.enableValidation();


// popupImage.setEventListeners();
// popupProfile.setEventListeners();
// popupWithFormCards.setEventListeners();
// section.generateCards();

//** ВАЛИДАЦИЯ ФОРМ */

//** Event listeners */

//** open and close edit popup listeners */

cardSection.renderItems();