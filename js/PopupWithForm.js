import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({
    popupSelector,
    handleSubmit
  }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  close() {
    this._form.reset();
    super.close();
  }

  _getInputValues() {
    this.inputValues = {};
    this._inputList.forEach((input) => {
      this.inputValues[input.name] = input.value;
    });
    return this.inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.close();
    });
  }
}

export default PopupWithForm;