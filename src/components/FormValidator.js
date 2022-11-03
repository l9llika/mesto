export default class FormValidator {
  constructor(config, formType) {
    this._config = config;
    this._formType = formType;
    this._button = formType.querySelector(this._config.button);
    this._inputs = Array.from(
      this._formType.querySelectorAll(this._config.input)
    );
    // this._inputSelector = config.inputSelector;
    // this._submitButtonSelector = config.submitButtonSelector;
    // this._inactiveButtonClass = config.inactiveButtonClass;
    // this._inputErrorClass = config.inputErrorClass;
    // this._errorClass = config.errorClass;
    // this._formElement = formElement;
    // this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    // this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }
  //** private methods */

  _handleFormInput(event) {
    this._input = event.target;
    this._setErrorInput(this._input);
    this._setSubmitButtonStateValid(this._formType);
    this._setSubmitButtonFormState(this._formType);
  }

  _showFieldError(input) {
    this._span = this._formType.querySelector(`#${input.id}-error`);
    this._span.textContent = input.validationMessage;
  }
  _hideFieldError(input) {
    this._span = this._formType.querySelector(`#${input.id}-error`);
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



  // _showInputError(inputElement) { // show field error
  //   const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  //   inputElement.classList.add(this._inputErrorClass);
  //   errorElement.classList.add(this._errorClass);
  //   errorElement.textContent = inputElement.validationMessage;
  // }

  // _hideInputError(inputElement) { //hide field error
  //   const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  //   inputElement.classList.remove(this._inputErrorClass);
  //   errorElement.classList.remove(this._errorClass);
  //   errorElement.textContent = '';
  // }



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
  enableValidation() {
    this._formType.addEventListener("input", (evt) =>
      this._handleFormInput(evt)
    );
  }

  clearFormErrors() {
    this._setSubmitButtonStateNotValid();
    this._inputs.forEach((input) => {
      this._setErrorInputValid(input);
    });
  }
}


// //Validation;

// class FormValidator {


//   _handleFormInput(event) {
//     this._input = event.target;
//     this._setErrorInput(this._input);
//     this._setSubmitButtonStateValid(this._formType);
//     this._setSubmitButtonFormState(this._formType);
//   }

//   _showFieldError(input) {
//     this._span = this._formType.querySelector(`#${input.name}-error`);
//     this._span.textContent = input.validationMessage;
//   }
//   _hideFieldError(input) {
//     this._span = this._formType.querySelector(`#${input.name}-error`);
//     this._span.textContent = "";
//   }

//   _setSubmitButtonStateValid() {
//     this._button.removeAttribute("disabled");
//     this._button.classList.remove(this._config.buttonDisabled);
//   }

//   _setSubmitButtonStateNotValid() {
//     this._button.setAttribute("disabled", true);
//     this._button.classList.add(this._config.buttonDisabled);
//   }

//   _setSubmitButtonFormState() {
//     const isValid = this._formType.checkValidity();
//     if (isValid) {
//       this._setSubmitButtonStateValid();
//     } else {
//       this._setSubmitButtonStateNotValid();
//     }
//   }

//   enableValidation() {
//     this._formType.addEventListener("input", (evt) =>
//       this._handleFormInput(evt)
//     );
//   }

//   _setErrorInputValid(input) {
//     input.classList.remove(this._config.inputError);
//     this._hideFieldError(input);
//   }
//   _setErrorInputInvalid(input) {
//     input.classList.add(this._config.inputError);
//     this._showFieldError(input, this._formType);
//     this._setSubmitButtonStateNotValid();
//   }

//   _setErrorInput(input) {
//     const isValid = input.checkValidity();
//     if (isValid) {
//       this._setErrorInputValid(input);
//     } else {
//       this._setErrorInputInvalid(input);
//     }
//   }
//   clearFormErrors() {
//     this._setSubmitButtonStateNotValid();
//     this._inputs.forEach((input) => {
//       this._setErrorInputValid(input);
//     });
//   }
// }

// export default FormValidator;