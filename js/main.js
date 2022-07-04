/** funtion for like button
const placeChoice = document.querySelectorAll('.place__choiсe');

[].forEach.call(placeChoice, function (placeChoice) {
  placeChoice.addEventListener('click', function () {
    placeChoice.classList.toggle('place__choice_active');
  });
});
*/

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