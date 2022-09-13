class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }
    //** Добываем элемент шаблона карточки */
    _getTemplate() {
        const placeTemplate = document
            .querySelector('.place-template')
            .content.querySelector('.place')
            .cloneNode(true);
        return placeTemplate;
    }
    //** Добавляем переключатель кнопки лайк */
    _handleLikeClick() {
        this._element
            .querySelector('.place__choice-btn')
            .classList.toggle('place__choice-btn_active');
    }
    //** Добавляем метод удаления краточки */
    _handleDeleteClick() {
        this._element.remove();
        this._element = null;
    }
    //** Слушатели событий  */
    _setListeners() {
        this._element
            .querySelector('.place__choice-btn')
            .addEventListener('click', () => {
                this._handleLikeClick();
            });
        this._element
            .querySelector('.place__trash-btn')
            .addEventListener('click', () => {
                this._handleDeleteClick();
            });
        this._element
            .querySelector('.place__image')
            .addEventListener('click', () => {
                this._handleCardClick({
                    name: this._name,
                    link: this._link
                });
            });
    }
    //** Создание элемента карточки  */
    generateCard() {
        this._element = this._getTemplate();
        this._setListeners();
        this._element.querySelector('.place__name').textContent = this._name;
        this._image = this._element.querySelector('.place__image');
        this._image.src = this._link;
        this._image.alt = this._name;
        return this._element;
    }
}

export default Card;