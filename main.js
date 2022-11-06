(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=r.handleCardClick,i=r.openPopupConfirm,a=r.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._cardId=e._id,this._owner=e.owner._id,this._templateSelector=n,this._handleCardClick=o,this.handleLikeClick=a,this._openPopupConfirm=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".place").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".place__like-btn"),this._element.querySelector(".place__name").textContent=this._name,this._likeCount=this._element.querySelector(".place__like-count"),this._deleteButton=this._element.querySelector(".place__trash-btn"),this._image=this._element.querySelector(".place__image"),this._image.alt=this._name,this._image.src=this._link,this._currentUserId=localStorage.getItem("userId"),this.setLikesValue({likes:this._likes}),this._isOwner()||this._deleteButton.classList.add("place__trash-btn_hidden"),this._setEventListeners(),this._element}},{key:"_handleCardLike",value:function(e){this.handleLikeClick(e,this._cardId)}},{key:"_handleImageClick",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_handleDeleteCard",value:function(){this._openPopupConfirm(this._cardId,this._element)}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"handleLikeButtonState",value:function(e){var t=e.isLoading;this._likeButton.disabled=!!t}},{key:"setLikesValue",value:function(e){var t=e.likes;this._likes=t,this._isLiked=this.isLikedByUser(t),this._isLiked?this._likeButton.classList.add("place__like-btn_active"):this._likeButton.classList.remove("place__like-btn_active"),this._likeCount.textContent=t.length}},{key:"isLikedByUser",value:function(e){var t=this;return this._likes.some((function(e){return e._id===t._currentUserId}))}},{key:"_isOwner",value:function(){return this._owner===this._currentUserId}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(t){e._handleCardLike(t)})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteCard()})),this._image.addEventListener("click",(function(){e._handleCardClick({name:e._name,link:e._link})}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formType=n,this._button=n.querySelector(this._config.button),this._inputs=Array.from(this._formType.querySelectorAll(this._config.input))}var t,r;return t=e,(r=[{key:"_handleFormInput",value:function(e){this._input=e.target,this._setErrorInput(this._input),this._setSubmitButtonStateValid(this._formType),this._setSubmitButtonFormState(this._formType)}},{key:"_showFieldError",value:function(e){this._span=this._formType.querySelector("#".concat(e.name,"-error")),this._span.textContent=e.validationMessage}},{key:"_hideFieldError",value:function(e){this._span=this._formType.querySelector("#".concat(e.name,"-error")),this._span.textContent=""}},{key:"_setSubmitButtonStateValid",value:function(){this._button.removeAttribute("disabled"),this._button.classList.remove(this._config.buttonDisabled)}},{key:"_setSubmitButtonStateNotValid",value:function(){this._button.setAttribute("disabled",!0),this._button.classList.add(this._config.buttonDisabled)}},{key:"_setSubmitButtonFormState",value:function(){this._formType.checkValidity()?this._setSubmitButtonStateValid():this._setSubmitButtonStateNotValid()}},{key:"enableValidation",value:function(){var e=this;this._formType.addEventListener("input",(function(t){return e._handleFormInput(t)}))}},{key:"_setErrorInputValid",value:function(e){e.classList.remove(this._config.inputError),this._hideFieldError(e)}},{key:"_setErrorInputInvalid",value:function(e){e.classList.add(this._config.inputError),this._showFieldError(e,this._formType),this._setSubmitButtonStateNotValid()}},{key:"_setErrorInput",value:function(e){e.checkValidity()?this._setErrorInputValid(e):this._setErrorInputInvalid(e)}},{key:"clearFormErrors",value:function(){var e=this;this._setSubmitButtonStateNotValid(),this._inputs.forEach((function(t){e._setErrorInputValid(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"generateCards",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItems",value:function(e){this._container.append(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=t.name,r=t.job,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job,r=e.avatar;this._name.textContent=t,this._job.textContent=n,this.setAvatar(r)}},{key:"setAvatar",value:function(e){this._avatar.src=e}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._buttonClose=this._popup.querySelector(".popup__close-btn"),this._handleEsc=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleCloseByOverlay",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){e._handleCloseByOverlay(t)})),this._buttonClose.addEventListener("click",(function(){return e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._inputList=t._form.querySelectorAll(".popup__input"),t._submitButton=t._form.querySelector(".popup__save-btn"),t._initialText=t._submitButton.textContent,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this.inputValues={},this._inputList.forEach((function(t){e.inputValues[t.name]=t.value})),this.inputValues}},{key:"_findInput",value:function(e){return Array.from(this._form).find((function(t){return t.name===e}))}},{key:"setEventListeners",value:function(){var e=this;p(y(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.handleSubmitButton({isLoading:!0}),e._handleSubmit(e._getInputValues())}))}},{key:"setInitialValues",value:function(e){var t=this;Object.keys(e).forEach((function(n){return t._findInput(n).value=e[n]}))}},{key:"close",value:function(){this._form.reset(),p(y(a.prototype),"close",this).call(this)}},{key:"handleSubmitButton",value:function(e){e.isLoading?(this._submitButton.disabled=!0,this._submitButton.textContent="Сохранение...",this._submitButton.classList.add("popup__save-btn_loading")):(this._submitButton.disabled=!1,this._submitButton.textContent=this._initialText,this._submitButton.classList.remove("popup__save-btn_loading"))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageElement=t._popup.querySelector(".popup__zoom-image"),t._titleElement=t._popup.querySelector(".popup__zoom-descriprtion"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;k(E(a.prototype),"open",this).call(this),this._imageElement.src=n,this._imageElement.alt=t,this._titleElement.textContent=t}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function I(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}const q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;L(T(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallBack()}))}},{key:"setSubmitCallback",value:function(e){this._submitCallBack=e}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);document.querySelector(".popup_add-place"),document.querySelector(".popup__add-form");var R=document.querySelector(".popup-edit-profile"),V=(document.querySelector(".popup_change-avatar"),document.querySelector(".popup__form[name='changeProfile']")),x=document.querySelector(".popup__form[name='changeAvatar']"),A=document.querySelector(".popup__form[name='createPlace']"),U=(R.querySelector(".popup__input-name"),R.querySelector(".popup__input-job"),document.querySelector(".profile__edit-btn"),document.querySelector(".profile__add-btn"),document.querySelector(".profile__add-btn")),D=document.querySelector(".profile__edit-btn-avatar"),F=document.querySelector(".profile__edit-btn"),N={form:".popup__form",input:".popup__input",button:".popup__save-btn",buttonDisabled:"popup__save-btn_disabled",inputError:"popup__input_type_error",span:".popup__error",template:".place-template"};function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"handelResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status," - ").concat(e.statusText))}},{key:"getUserInformation",value:function(){var e=this;return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e.handelResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e.handelResponse(t)}))}},{key:"editUserInformation",value:function(e){var t=this,n=e.job,r=e.name;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:r,about:n})}).then((function(e){return t.handelResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.namePlace,r=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t.handelResponse(e)}))}},{key:"deleteOwnCard",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t.handelResponse(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t.handelResponse(e)}))}},{key:"removeCardLike",value:function(e){var t=this;return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t.handelResponse(e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t.handelResponse(e)}))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{Authorization:"39a4caee-006a-46b7-a27f-18f6a879f957","Content-Type":"application/json"}});function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=new s(".popup_loader"),M=new q(".popup_confirmation"),$=[],K=function(e){var n=new t(e,N.template,{handleCardClick:function(e){return te.open(e)},openPopupConfirm:function(e){return function(e,t){M.open(),M.setSubmitCallback((function(){H.open(),J.deleteOwnCard(e).then((function(){t.removeCard(),M.close()})).catch((function(e){return console.log(e)})).finally((function(){H.close()}))}))}(e,n)},handleLikeClick:function(e,t){return Q(e,t,n)}});return n.generateCard()},Q=function(e,t,n){var r=n.isLikedByUser();n.handleLikeButtonState({isLoadig:!0}),(r?J.removeCardLike(t):J.likeCard(t)).then((function(e){n.setLikesValue(e),n.handleLikeButtonState({isLoadig:!1})})).catch((function(e){return console.log(e)}))},W=new u({name:".profile__name",job:".profile__about",avatar:".profile__avatar"});Promise.all([J.getUserInformation(),J.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];H.close(),W.setUserInfo({name:o.name,job:o.about,avatar:o.avatar}),localStorage.setItem("userId",o._id),i.map((function(e){$.push(e)})),X.generateCards($)})).catch((function(e){console.log(e)}));var X=new i({renderer:function(e){var t=K(e);X.addItems(t)}},".elements"),Y=new m({popupSelector:".popup_change-avatar",handleSubmit:function(e){var t=e.avatar;J.changeAvatar(t).then((function(e){W.setAvatar(e.avatar),Y.handleSubmitButton({isLoading:!1}),Y.close()})).catch((function(e){return console.log(e)}))}}),Z=new m({popupSelector:".popup-edit-profile",handleSubmit:function(e){return J.editUserInformation(e).then((function(e){W.setUserInfo({name:e.name,job:e.about,avatar:e.avatar}),Z.handleSubmitButton({isLoading:!1}),Z.close()})).catch((function(e){return console.log(e)}))}}),ee=new m({popupSelector:".popup_add-place",handleSubmit:function(e){var t=e.namePlace,n=e.link;J.addNewCard({namePlace:t,link:n}).then((function(e){var t=K(e);X.addItem(t),ee.handleSubmitButton({isLoading:!1}),ee.close()})).catch((function(e){return console.log(e)}))}}),te=new O(".popup_zoom");te.setEventListeners(),Z.setEventListeners(),ee.setEventListeners(),M.setEventListeners(),Y.setEventListeners();var ne=new r(N,V),re=new r(N,A),oe=new r(N,x);F.addEventListener("click",(function(){ne.clearFormErrors();var e=W.getUserInfo();Z.setInitialValues(e),Z.open()})),U.addEventListener("click",(function(){re.clearFormErrors(),ee.open()})),D.addEventListener("click",(function(){oe.clearFormErrors(),Y.open()})),oe.enableValidation(),re.enableValidation(),ne.enableValidation()})();
//# sourceMappingURL=main.js.map