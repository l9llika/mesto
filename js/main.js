// Функция поставить лайк месту
const placeChoice = document.querySelectorAll('.place__choiсe');

[].forEach.call(placeChoice, function (placeChoice) {
  placeChoice.addEventListener('click', function () {
    placeChoice.classList.toggle('place__choice_active');
  });
});

// Функция открытия и закрытия попап окна
const popupElement = document.querySelector('.popup');
const popupCloseBtn = popupElement.querySelector('.popup__close-btn');
const profileElement = document.querySelector('.profile');
const profileEditBtn = profileElement.querySelector('.profile__edit-btn');

let openPopup = function () {
  popupElement.classList.add('popup_opened');
}
let closePopup = function () {
  popupElement.classList.remove('popup_opened');
}

profileEditBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

// Редактирование информации о профиле
const formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input-name');
let jobInput = formElement.querySelector('.popup__input-job');
let profileName = profileElement.querySelector('.profile__name');
let profileJob = profileElement.querySelector('.profile__about');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);

// Отображение информации о профиле в попап форме
let inputNameValue = profileElement.querySelector('.profile__name').innerHTML;
let inputJobValue = profileElement.querySelector('.profile__about').innerHTML;

nameInput.value = inputNameValue;
jobInput.value = inputJobValue;