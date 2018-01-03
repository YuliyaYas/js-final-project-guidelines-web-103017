class Category {
  constructor(json) {
    this.name = json.name;
    this.id = json.id;
    this.things = [...json.things];
    Category.all.push(this);
  }

  renderCategory() {
    return `<button class="accordion">${this.name}</button>
              <div id="${this.id}"class="category-panel"></div>`
  }

  static renderCatThings(thing) {
    return `<p>${thing.name}</p>`
  }

}

Category.all = [];
