export default class Card {
    constructor(cardData, templateSelector, {
        handleCardClick,
        openPopupConfirm,
        handleLikeClick
    }) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._likes = cardData.likes;
        this._cardId = cardData._id;
        this._owner = cardData.owner._id;

        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;

        this.handleLikeClick = handleLikeClick;
        this._openPopupConfirm = openPopupConfirm;


    }
    //** Добываем элемент шаблона карточки */
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector(".place")
            .cloneNode(true);

        return cardElement;
    }
    //** Создание элемента карточки  */
    generateCard() {
        this._element = this._getTemplate();

        this._likeButton = this._element.querySelector(".place__like-btn");
        this._element.querySelector(".place__name").textContent = this._name;
        this._likeCount = this._element.querySelector(".place__like-count");
        this._deleteButton = this._element.querySelector(".place__trash-btn");

        this._image = this._element.querySelector(".place__image");
        this._image.src = this._link;
        this._image.alt = this._name;

        this._currentUserId = localStorage.getItem("userId");

        this.setLikesValue({
            likes: this._likes
        });
        if (!this._isOwner()) {
            this._deleteButton.classList.add("place__trash-btn_hidden");
        }
        this._setEventListeners();
        return this._element;
    }
    //** private methods */


    //** Добавляем переключатель кнопки лайк */
    _handleCardLike(evt) {
        this.handleLikeClick(evt, {
            likes: this._likes,
            id: this._cardId
        });
    }
    //** Добавляем клик по изображению */
    _handleImageClick() {
        this._handleCardClick(this._name, this._link);
    }
    _handleDeleteCard() {
        this._openPopupConfirm(this._cardId, this._element);
    }


    //** public methods */
    //** Добавляем метод удаления краточки */
    removeCard() {
        this._element.remove();
        this._element = null;
    }
    //** Проверка лайка карточки */
    handleLikeButtonState({
        isLoading
    }) {
        if (isLoading) {
            this._likeButton.disabled = true;
            this._likeButton.classList.add("place__like-btn-loading");
        } else {
            this._likeButton.disabled = false;
            this._likeButton.classList.remove("place__like-btn-loading");
        }
    }
    //** Меняем значения лайка карточки */
    setLikesValue({
        likes
    }) {
        this._isLiked = this.isLikedByUser(likes);
        if (this._isLiked) {
            this._likeButton.classList.add("place__like-btn_active");
        } else {
            this._likeButton.classList.remove("place__like-btn_active");
        }

        this._likeCount.textContent = likes.length;
        this._likes = likes;
    }

    //** check likes by user */
    isLikedByUser() {
        return this._likes.some((ownLike) => ownLike._id === this._currentUserId);
    }
    //**  */
    _isOwner() {
        return this._owner === this._currentUserId;
    }

    //** Слушатели событий  */
    _setEventListeners() {
        this._likeButton.addEventListener('click', (evt) => {
            this._handleCardLike(evt);
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._image.addEventListener('click', () => {
            this._handleImageClick();
        });
    }
}