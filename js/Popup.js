// export default class Popup {
//   constructor(popupSelector) {
//     this._popup = document.querySelector(popupSelector);
//   }

//   open() {
//     this._popup.classList.add("popup_opened");
//     document.addEventListener("keyup", (evt) => this._handleEscClose(evt));
//   }

//   close() {
//     this._popup.classList.remove("popup_opened");
//     document.removeEventListener("keyup", (evt) => this._handleEscClose(evt));
//   }

//   _handleEscClose(evt) {
//     if (evt.key === "Escape") {
//       this.close();
//     }
//   }
//   setEventListeners() {
//     this._popup.addEventListener('click', (evt) => {
//       if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-btn")) {
//         this.close();
//       }
//     })
//   };
// }




export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    console.log(popupSelector);
    console.log(this._popup);
  };

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close-btn')) {
        this.close();
      }
    })
  };
}