// import Popup from "./Popup.js";

// export default class PopupWithForm extends Popup {
//   constructor({
//     popupSelector,
//     handleSubmit
//   }) {
//     super(popupSelector);
//     this._handleSubmit = handleSubmit;
//     this._form = this._popup.querySelector('.popup__form')
//     this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
//   }

//   close() {
//     super.close();
//     this._popup.querySelector('.popup__form').reset();
//   }

//   _getInputValues() {
//     this._inputList = this._popup.querySelectorAll('.popup__input');
//     this._inputValues = {};
//     this._inputList.forEach((input) => {
//       this._inputValues[input.name] = input.value;
//     });
//     return this.inputValues;
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     this._form.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//       this._handleSubmit(this._getInputValues());
//     });
//   }
// }


import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._submitFormCallback = submitFormCallback;
    this._form = this._popup.querySelector('.popup__form')
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    return this._inputList.reduce((formValues, input) => {
      formValues[input.name] = input.value;
      return formValues;
    }, {})
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormCallback(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}