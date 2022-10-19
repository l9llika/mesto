export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }
    //** Добываем элемент шаблона карточки */
    _getTemplate() {
        const placeTemplate = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.place')
            .cloneNode(true);
        return placeTemplate;
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
    //** Создание элемента карточки  */
    generateCard() {
        this._element = this._getTemplate();

        this._image = this._element.querySelector('.place__image');
        this._element.querySelector('.place__name').textContent = this._name;

        this._image.src = this._link;
        this._image.alt = this._name;

        this._setEventListeners();

        return this._element;
    }
}