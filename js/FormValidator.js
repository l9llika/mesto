// // class FormValidator 

// class FormValidator {
//   constructor(config, formElement) {
//     this._inputSelector = config.inputSelector;
//     this._submitButtonSelector = config.submitButtonSelector;
//     this._inactiveButtonClass = config.inactiveButtonClass;
//     this._inputErrorClass = config.inputErrorClass;
//     this._errorClass = config.errorClass;
//     this._formElement = formElement;
//     this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
//     this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
//   }


//   _handleFormInput(event) {
//     this._input = event.target;
//     this._form = event.currentTarget;
//     this._button = this._form.querySelector(this._config.button);
//     this._isValid = this._form.checkValidity();
//     this._showFieldError(this._input);
//     this._setSubmitButtonState(this._button);
//   }
//   handleInitialButtonState(button) {
//     this._disableButton(button);
//   }
//   _disableButton(button) {
//     button.disabled = true;
//     button.classList.add(this._config.buttonDisabled);
//   }
//   _enableButton(button) {
//     button.disabled = false;
//     button.classList.remove(this._config.buttonDisabled);
//   }
//   enableValidation() {
//     this._form = Array.from(document.querySelectorAll(this._config.form));
//     this._form.forEach((form) => {
//       this._button = form.querySelector(this._config.button);
//       this._disableButton(this._button);
//       form.addEventListener("input", (event) => {
//         this._handleFormInput(event);
//       });
//     });
//   }
//   _showFieldError(input) {
//     const span = document.getElementById(`${input.getAttribute("name")}-error`);
//     span.textContent = input.validationMessage;
//     if (input.validationMessage !== "") {
//       input.classList.add(this._config.inputTypeError);
//     } else {
//       input.classList.remove(this._config.inputTypeError);
//     }
//   }
//   _setSubmitButtonState(button) {
//     if (this._isValid) {
//       this._enableButton(button);
//     }
//     if (!this._isValid) {
//       this._disableButton(button);
//     }
//   }
//   clearFormErrors() {
//     this._popupError = Array.from(
//       this._formType.querySelectorAll(".popup__error")
//     );
//     this._input = Array.from(this._formType.querySelectorAll(".popup__input"));
//     this._popupError.forEach((error) => {
//       error.textContent = "";
//     });
//     this._input.forEach((eachInput) => {
//       eachInput.classList.remove("popup__input_type_error");
//     });
//   }
// }
// export default FormValidator;


export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(".popup__error");
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(".popup__error");
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return (this._inputList.some((inputElement) => !inputElement.validity.valid));
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });

    this._toggleButtonState();
  }
  enableValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  }
}