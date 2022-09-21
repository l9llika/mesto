// class FormValidator 

class FormValidator {
  constructor(config, formType) {
    this._config = config;
    this._formType = formType;
  }


  _handleFormInput(event) {
    this._input = event.target;
    this._form = event.currentTarget;
    this._button = this._form.querySelector(this._config.button);
    this._isValid = this._form.checkValidity();
    this._showFieldError(this._input);
    this._setSubmitButtonState(this._button);
  }
  handleInitialButtonState(button) {
    this._disableButton(button);
  }
  _disableButton(button) {
    button.disabled = true;
    button.classList.add(this._config.buttonDisabled);
  }
  _enableButton(button) {
    button.disabled = false;
    button.classList.remove(this._config.buttonDisabled);
  }
  enableValidation() {
    this._form = Array.from(document.querySelectorAll(this._config.form));
    this._form.forEach((form) => {
      this._button = form.querySelector(this._config.button);
      this._disableButton(this._button);
      form.addEventListener("input", (event) => {
        this._handleFormInput(event);
      });
    });
  }
  _showFieldError(input) {
    const span = document.getElementById(`${input.getAttribute("name")}-error`);
    span.textContent = input.validationMessage;
    if (input.validationMessage !== "") {
      input.classList.add(this._config.inputTypeError);
    } else {
      input.classList.remove(this._config.inputTypeError);
    }
  }
  _setSubmitButtonState(button) {
    if (this._isValid) {
      this._enableButton(button);
    }
    if (!this._isValid) {
      this._disableButton(button);
    }
  }
  clearFormErrors() {
    this._popupError = Array.from(
      this._formType.querySelectorAll(".popup__error")
    );
    this._input = Array.from(this._formType.querySelectorAll(".popup__input"));
    this._popupError.forEach((error) => {
      error.textContent = "";
    });
    this._input.forEach((eachInput) => {
      eachInput.classList.remove("popup__input_type_error");
    });
  }
}
export default FormValidator;