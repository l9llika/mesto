import {
  ESCAPE_KEY
} from "../utils/constants.js";
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector(".popup__close-btn");
    this._handleEsc = this._handleEscClose.bind(this);
  }
  //** private methods */

  _handleCloseByOverlay(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.close();
  }
  _handleEscClose(evt) {
    if (evt.key === ESCAPE_KEY) {
      this.close();
    }
  }
  //** public methods */
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener("mousedown", (event) => {
      this._handleCloseByOverlay(event);
    });
    this._buttonClose.addEventListener("click", () => this.close());
  }
}