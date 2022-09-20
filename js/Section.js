class Section {
  constructor({
    items,
    renderer
  }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._items = items;
    this._renderer = renderer;
  }
  generateCards(items) {
    items.forEach((item) => this._renderer(item));
  }
  addItem(element) {
    this._container.append(element);
  }
}
export default Section;