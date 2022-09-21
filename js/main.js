//** Card */
import Card from "./Card.js";
//** FormValidator */
import FormValidator from "./FormValidator.js";
//** UserInfo */
import UserInfo from "./UserInfo.js";
//** PopUp */
import Popup from "./Popup.js";
//** Section */
import Section from "./Section.js";
//** PopUp with form */
import PopupWithForm from "./PopupWithForm.js";
//** PopUp with image */
import PopupWithImage from "./PopupWithImage.js";


import {
  formAllSelectors,
  classCreationSelectors,
  initialPlaces
} from "./constants.js";


import {
  popupForm,
  popupProfileOpenButton,
  profileSubmitButton,
  placePopupOpenButton,
  popupPlaceForm,
  buttonPlaceSubmit
} from "./domElements.js";


// СОЗДАНИЕ НОВОЙ КАРТОЧКИ
const createCard = (item) => {
  const card = new Card(item, selectorClasses.template, (obj) =>
    popupImage.open(obj)
  );
  const cardElement = card.generateCard();
  section.addItem(cardElement);
};


//НОВЫЙ КЛАСС СЕКЦИИ МЕСТ И ВСТАВКА В РАЗМЕТКУ
const section = new Section({
    items: initialPlaces,
    renderer: createCard,
  },
  classCreationSelectors.cardList
);
// НОВЫЙ КЛАСС ОТОБРАЖЕНИЯ ПОЛЬЗОВАТЕЛЯ НА СТРАНИЦЕ
const userInfo = new UserInfo({
  name: classCreationSelectors.userName,
  job: classCreationSelectors.userJob,
});


// // НОВЫЙ КЛАСС ФОРМЫ
const popupProfile = new PopupWithForm(
  classCreationSelectors.profilePopup,
  (v) => userInfo.setUserInfo(v)
);
const popupWithFormCards = new PopupWithForm(
  classCreationSelectors.placePopup,
  createCard
);





const popupImage = new PopupWithImage(classCreationSelectors.imagePopup);





popupImage.setEventListeners();
popupProfile.setEventListeners();
popupWithFormCards.setEventListeners();
section.generateCards();

//** ВАЛИДАЦИЯ ФОРМ */
const formProfileCheckValid = new FormValidator(formAllSelectors, formElement);
formProfileCheckValid.enableValidation();

const formPlaceCheckValid = new FormValidator(formAllSelectors, popupAddPlace);
formPlaceCheckValid.enableValidation();

//** Event listeners */

//** open and close edit popup listeners */
popupProfileOpenButton.addEventListener("click", () => {
  formProfileCheckValid.clearFormErrors();
  formProfileCheckValid.handleInitialButtonState(profileSubmitButton);
  popupProfile.setInitialValues(userInfo.getUserInfo());
  popupProfile.open();
});
placePopupOpenButton.addEventListener("click", () => {
  formPlaceCheckValid.clearFormErrors();
  formProfileCheckValid.handleInitialButtonState(buttonPlaceSubmit);
  popupWithFormCards.open();
});