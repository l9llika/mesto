import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({
    popupSelector,
    handleSubmit
  }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__save-btn");
    this._initialText = this._submitButton.textContent;
  }
  _getInputValues() {
    this.inputValues = {};
    this._inputList.forEach((input) => {
      this.inputValues[input.name] = input.value;
    });
    return this.inputValues;
  }

  _findInput(key) {
    return Array.from(this._form).find((i) => i.name === key);
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleSubmitButton({
        isLoading: true
      });
      this._handleSubmit(this._getInputValues());
    });
  }
  setInitialValues(initialValues) {
    Object.keys(initialValues).forEach(
      (key) => (this._findInput(key).value = initialValues[key])
    );
  }
  close() {
    this._form.reset();
    super.close();
  }
  handleSubmitButton({
    isLoading
  }) {
    if (isLoading) {
      this._submitButton.disabled = true;
      this._submitButton.textContent = "Сохранение...";
      this._submitButton.classList.add("popup__save-btn_loading");
    } else {
      this._submitButton.disabled = false;
      this._submitButton.textContent = this._initialText;
      this._submitButton.classList.remove("popup__save-btn_loading");
    }
  }
}