class Popup {
  constructor(popup) {
    this._popup = document.querySelector(popup);
    this._closeButton = this._popup.querySelector(".popup__close-button");
  }

  open() {
    console.log(document.querySelector(".popup_profile"));
    this._popup.classList.add("popup_active");
    body.classList.add("page_overflow");
  }

  close() {
    this._popup.classList.remove("popup_active");
    body.classList.remove("page_overflow");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;