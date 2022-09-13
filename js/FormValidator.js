// class FormValidator 
class FormValidator {
  constructor(config, formType) {
    this._config = config;
    this._formType = formType;
    this._button = formType.querySelector(this._config.button);
    this._inputs = Array.from(
      this._formType.querySelectorAll(this._config.input)
    );
  }

  _handleFormInput(event) {
    this._input = event.target;
    this._setErrorInput(this._input);
    this._setSubmitButtonStateValid(this._formType);
    this._setSubmitButtonFormState(this._formType);
  }

  _showFieldError(input) {
    this._span = this._formType.querySelector(`#${input.name}-error`);
    this._span.textContent = input.validationMessage;
  }
  _hideFieldError(input) {
    this._span = this._formType.querySelector(`#${input.name}-error`);
    this._span.textContent = "";
  }

  _setSubmitButtonStateValid() {
    this._button.removeAttribute("disabled");
    this._button.classList.remove(this._config.buttonDisabled);
  }

  _setSubmitButtonStateNotValid() {
    this._button.setAttribute("disabled", true);
    this._button.classList.add(this._config.buttonDisabled);
  }

  _setSubmitButtonFormState() {
    const isValid = this._formType.checkValidity();
    if (isValid) {
      this._setSubmitButtonStateValid();
    } else {
      this._setSubmitButtonStateNotValid();
    }
  }

  enableValidation() {
    this._formType.addEventListener("input", (evt) =>
      this._handleFormInput(evt)
    );
  }

  _setErrorInputValid(input) {
    input.classList.remove(this._config.inputError);
    this._hideFieldError(input);
  }
  _setErrorInputInvalid(input) {
    input.classList.add(this._config.inputError);
    this._showFieldError(input, this._formType);
    this._setSubmitButtonStateNotValid();
  }

  _setErrorInput(input) {
    const isValid = input.checkValidity();
    if (isValid) {
      this._setErrorInputValid(input);
    } else {
      this._setErrorInputInvalid(input);
    }
  }
  clearFormErrors() {
    this._setSubmitButtonStateNotValid();
    this._inputs.forEach((input) => {
      this._setErrorInputValid(input);
    });
  }
}

export default FormValidator;