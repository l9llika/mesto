import Popup from "./Popup.js";

class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallBack();
    });
  }
  setSubmitCallback(callBack) {
    this._submitCallBack = callBack;
  }

}

export default PopupConfirm;