class Category {
  constructor(json) {
    this.name = json.name;
    this.id = json.id;
    this.things = [...json.things];
    Category.all.push(this);
  }

  renderCategory() {
    return `<button id="${this.id}" class="accordian">${this.name}</button>
              <div class="category-panel"></div>`
  }

  renderCatThings() {
    return `<p>${this.name}</p>`
  }

}

Category.all = [];
