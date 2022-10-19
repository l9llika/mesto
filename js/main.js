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
  formAllSelectors,
  initialPlaces,
  popupFormAdd,
  popupFormEdit,
  nameInput,
  jobInput,
  buttonEdit,
  buttonAdd
} from "./constants.js";




//** СОЗДАНИЕ НОВОЙ КАРТОЧКИ */ 
function createCard(data) {
  const newCard = new Card({
      name: data.name,
      link: data.link
    },
    '.template',
    imagePopup.open.bind(imagePopup));
  return newCard.generateCard();
}


//НОВЫЙ КЛАСС СЕКЦИИ МЕСТ И ВСТАВКА В РАЗМЕТКУ
const cardSection = new Section({
    items: initialPlaces,
    renderer: (item) => cardSection.addItem(createCard(item))
  },
  ".cards"
);


const handleProfileFormSubmit = (formValues) => {
  userInfo.setUserInfo(formValues.nameInput, formValues.jobInput);
  popupEdit.close();
}

const handleCardFormSubmit = (formValues) => {
  cardSection.addItem(createCard(formValues));
  popupAdd.close();
}


const imagePopup = new PopupWithImage(".popup_zoom");
const popupEdit = new PopupWithForm(".popup-edit-profile", handleProfileFormSubmit);
const popupAdd = new PopupWithForm(".popup_add-place", handleCardFormSubmit);
const formEditValidator = new FormValidator(formAllSelectors, popupFormEdit);
const formAddValidator = new FormValidator(formAllSelectors, popupFormAdd);
const userInfo = new UserInfo(".profile__name", ".profile__about");

function handleEditProfileButtonClick() {
  popupEdit.open();
  const userInfoObj = userInfo.getUserInfo();
  nameInput.value = userInfoObj.name;
  jobInput.value = userInfoObj.info;
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



cardSection.generateCards();