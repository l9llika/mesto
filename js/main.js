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
//** Obj with cards name and links */
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



//** NEW CARD CREATION */ 
function createCard(cardData) {
  const newCard = new Card({
      name: cardData.name,
      link: cardData.link
    },
    '.place-template',
    imagePopup.open.bind(imagePopup));
  return newCard.generateCard();
}


//** Section with cards creation */
const cardSection = new Section({
    items: initialPlaces,
    renderer: (item) => cardSection.addItem(createCard(item))
  },
  ".elements"
);

//** SUBMITS FOR PROFILE AND NEW CARD  */
const handleProfileFormSubmit = (profileSelectors) => {
  userInfo.setUserInfo(profileSelectors);
  popupEdit.close();
}

const handleCardFormSubmit = (formAllSelectors) => {
  cardSection.addItem(createCard(formAllSelectors));
  popupAdd.close();
};

//** NEW CLASS CREATIONS */
// popups
const imagePopup = new PopupWithImage(".popup_zoom");
const popupEdit = new PopupWithForm(".popup-edit-profile", handleProfileFormSubmit);
const popupAdd = new PopupWithForm(".popup_add-place", handleCardFormSubmit);
// userinfo
const userInfo = new UserInfo({
  name: profileSelectors.name,
  job: profileSelectors.job
});
// validation
const formEditValidator = new FormValidator(formAllSelectors, popupFormEdit);
const formAddValidator = new FormValidator(formAllSelectors, popupFormAdd);

//**  */
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


//** EVENT LISTENERS */

buttonEdit.addEventListener('click', handleEditProfileButtonClick);
buttonAdd.addEventListener('click', handleAddCardButtonClick);

imagePopup.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();

formEditValidator.enableValidation();
formAddValidator.enableValidation();

//** RENDER CARDS */
cardSection.renderItems();