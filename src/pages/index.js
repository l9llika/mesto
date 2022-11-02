//** import css file */
import './index.css';
//** Card */
import Card from "../components/Card.js";
//** FormValidator */
import FormValidator from "../components/FormValidator.js";
//** Section */
import Section from "../components/Section.js";
//** UserInfo */
import UserInfo from "../components/UserInfo.js";
//** Popup */
import Popup from "../components/Popup.js";
//** PopUp with form */
import PopupWithForm from "../components/PopupWithForm.js";
//** PopUp with image */
import PopupWithImage from "../components/PopupWithImage.js";
//** PopupConfirm */
import PopupConfirm from '../components/PopupConfirm.js';
//** API class */
import Api from "../components/Api.js";
import {
  api
} from "../components/Api.js"

import {
  formAllSelectors,
  profileSelectors,
  popupAddPlace,
  popupFormAdd,
  popupFormEdit,
  nameInput,
  jobInput,
  buttonEdit,
  buttonAdd,
  cardList
} from "../utils/constants.js";

const popupAvatarElement = profileSelectors.popupAvatar;
const popupLoader = new Popup(profileSelectors.loaderPopup);
const popupConfirm = new PopupConfirm(profileSelectors.confirmationPopup);

const cardsArrayFromServer = [];

console.log(popupLoader);

const handleDeleteCard = (id, cardElement) => {
  popupConfirm.open();
  popupConfirm.setSubmitCallback(() => {
    popupLoader.open();
    api
      .deleteOwnCard(id)
      .then(() => {
        cardElement.removeCard();
        popupConfirm.close();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        popupLoader.close();
      });
  });
};
//** Server connect */
fetch('https://nomoreparties.co/v1/cohort-52/users/me', {
    headers: {
      authorization: '39a4caee-006a-46b7-a27f-18f6a879f957'
    }
  })
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  });

// api.handelResponse();

//** NEW CARD CREATION */ 
const createCard = (cardData) => {
  const card = new Card(cardData, ".elements", {
    handleCardClick: (obj) => popupImage.open(obj),
    openPopupConfirm: (id) => handleDeleteCard(id, card),
    handleLikeClick: (evt, id) => handleLike(evt, id, card),
  });

  const cardElement = card.generateCard();

  return cardElement;
};

const handleLike = (_, {
  likes,
  id
}, card) => {
  const isCardLiked = card.isLikedByUser(likes);
  card.handleLikeButtonState({
    isLoadig: true
  });
  const action = isCardLiked ? api.removeCardLike(id) : api.likeCard(id);

  action
    .then((res) => {
      card.setLikesValue(res);
      card.handleLikeButtonState({
        isLoadig: false
      });
    })
    .catch((error) => console.log(error));
};
const userInfo = new UserInfo({
  name: profileSelectors.name,
  job: profileSelectors.job,
  avatar: profileSelectors.avatar,
});
console.log(userInfo);

Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    popupLoader.close();
    userInfo.setUserInfo({
      name: userData.name,
      job: userData.job,
      avatar: userData.avatar,
    });
    localStorage.setItem("userId", userData._id);
    initialCards.map((element) => {
      cardsArrayFromServer.push(element);
    });
    section.generateCards(cardsArrayFromServer);
  })
  .catch((error) => {
    console.log(error);
  });
//** Section with cards creation */
const section = new Section({
    renderer: (item) => {
      const cardElement = createCard(item);
      section.addItems(cardElement);
    },
  },
  profileSelectors.cardList
);

const popupProfile = new PopupWithForm({
  popupSelector: popupFormEdit,
  handleSubmit: (values) =>
    api
    .editUserInformation(values)
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        job: res.about,
        avatar: res.avatar,
      });
      popupFormEdit.handleSubmitButton({
        isLoading: false
      });
      popupFormEdit.close();
    })
    .catch((error) => console.log(error)),
});
console.log(popupProfile);

const popupWithFormCards = new PopupWithForm({
  popupSelector: popupAddPlace,
  handleSubmit: ({
    place,
    link
  }) => {
    api
      .addNewCard({
        place,
        link
      })
      .then((res) => {
        const cardElement = createCard(res);
        section.addItem(cardElement);
        popupWithFormCards.handleSubmitButton({
          isLoading: false
        });
        popupWithFormCards.close();
      })
      .catch((error) => console.log(error));
  },
});
console.log(popupWithFormCards);

const popupAvatar = new PopupWithForm({
  popupSelector: profileSelectors.popupAvatar,
  handleSubmit: ({
    avatar
  }) => {
    api
      .changeAvatar(avatar)
      .then((res) => {
        userInfo.setAvatar(res.avatar);
        popupAvatar.handleSubmitButton({
          isLoading: false
        });
        popupAvatar.close();
      })
      .catch((error) => console.log(error));
  },
});
console.log(popupAvatar);
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
const popupImage = new PopupWithImage(profileSelectors.imagePopup);
// userinfo

// // validation
const formProfileCheckValid = new FormValidator(formAllSelectors, popupFormEdit);
const formPlaceCheckValid = new FormValidator(formAllSelectors, popupFormAdd);
const formAvatarCheckValid = new FormValidator(formAllSelectors, popupAvatarElement);
// //**  */
// function handleEditProfileButtonClick() {
//   popupEdit.open();
//   const userInfoObj = userInfo.getUserInfo();
//   nameInput.value = userInfoObj.name;
//   jobInput.value = userInfoObj.job;
//   formEditValidator.resetValidation();
// }

// function handleAddCardButtonClick() {
//   popupAdd.open();
//   formAddValidator.resetValidation();
// }


//** EVENT LISTENERS */

popupImage.setEventListeners();
popupProfile.setEventListeners();
popupWithFormCards.setEventListeners();
popupConfirm.setEventListeners();
popupAvatar.setEventListeners();


popupProfileOpenButton.addEventListener("click", () => {
  formProfileCheckValid.clearFormErrors();
  const initialData = userInfo.getUserInfo();
  popupProfile.setInitialValues(initialData);
  popupProfile.open();
});
placePopupOpenButton.addEventListener("click", () => {
  formPlaceCheckValid.clearFormErrors();
  popupWithFormCards.open();
});
openButtonChangeAvatar.addEventListener("click", () => {
  formAvatarCheckValid.clearFormErrors();
  popupAvatar.open();
});

// buttonEdit.addEventListener('click', handleEditProfileButtonClick);
// buttonAdd.addEventListener('click', handleAddCardButtonClick);

// imagePopup.setEventListeners();
// popupEdit.setEventListeners();
// popupAdd.setEventListeners();

formAvatarCheckValid.enableValidation();
formEditValidator.enableValidation();
formPlaceCheckValid.enableValidation();

//** RENDER CARDS */
// cardSection.renderItems();