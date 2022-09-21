class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup_active");
    document.addEventListener("keyup", (evt) => this._handleEscClose(evt));
  }

  close() {
    this._popup.classList.remove("popup_active");
    document.removeEventListener("keyup", (evt) => this._handleEscClose(evt));
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleClose(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains("popup__close-button")
    ) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => this._handleClose(evt));
  }
}

export default Popup;