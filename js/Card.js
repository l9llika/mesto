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

// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
// принимает в конструктор её данные и селектор её template-элемента;
// содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// содержит приватные методы для каждого обработчика;
// содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.


// СОЗДАНИЕ НОВОЙ КАРТОЧКИ
// function createCard(cardName, cardLink) {
//     const listItem = new Card(cardName, cardLink, ".template");
//     const newCard = listItem.generate();
//     return newCard
// }

// const createCard = (data) => {
//     const card = new Card(data, cardSelector);
//     return card.getView();
// }

// const renderCard = (data, wrap) => {
//     const card = createCard(data);
//     wrap.prepend(card.getView());
// };