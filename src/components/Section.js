export default class Section {
  constructor({
    renderer
  }, selector) {
    this._container = document.querySelector(selector);
    this._renderer = renderer;
  }
  generateCards(items) {
    items.forEach((item) => this._renderer(item));
  }

  addItem(element) {
    this._container.prepend(element);
  }

  addItems(element) {
    this._container.append(element);
  }
}