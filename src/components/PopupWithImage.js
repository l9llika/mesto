import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".popup__zoom-image");
    this._titleElement = this._popup.querySelector(".popup__zoom-descriprtion");
  }

  open({
    name,
    link
  }) {
    super.open();
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._titleElement.textContent = name;
  }
}