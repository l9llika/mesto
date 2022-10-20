export default class Card {
    constructor(cardData, templateSelector, handleCardClick) {
        this._name = cardData.name;
        this._link = cardData.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
    }
    //** private methods */
    //** Добываем элемент шаблона карточки */
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.place')
            .cloneNode(true);

        return cardElement;
    }
    //** Добавляем переключатель кнопки лайк */
    _handleLikeClick() {
        this._likeButton.classList.toggle('place__choice-btn_active');
    }
    //** Добавляем метод удаления краточки */
    _handleDeleteClick() {
        this._element.remove();
        this._element = null;
    }
    //** Добавляем клик по изображению */
    _handleImageClick() {
        this._handleCardClick(this._name, this._link);
    }
    //** Слушатели событий  */
    _setEventListeners() {
        this._likeButton = this._element.querySelector('.place__choice-btn');
        this._deleteButton = this._element.querySelector('.place__trash-btn');
        this._cardImage = this._element.querySelector('.place__image');

        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick();
        });

        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._cardImage.addEventListener('click', () => {
            this._handleImageClick();
        });

    }
    //** public methods */
    //** Создание элемента карточки  */
    generateCard() {
        this._element = this._getTemplate();

        this._cardImage = this._element.querySelector('.place__image');
        // this._cardTitle.querySelector('.place__name').textContent = this._name;
        this._cardTitle = this._element.querySelector('.place__name');

        this._cardTitle.textContent = this._name;
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;

        this._setEventListeners();

        return this._element;
    }
}