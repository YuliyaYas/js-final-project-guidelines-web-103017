class Thing {
  constructor(json) {
    this.name = json.name;
    this.id = json.id;
    this.categoryId = json.category.id
    this.activities = [...json.activities]
    Thing.all.push(this);
  }

  static renderThingForm(id) {
    return ` <div class="${id}">
                  <input class="input" name="prof1" type="text" placeholder="Add Item"/>
                  <button id="${id}" class="add-thing" type="button">+</button>
            </div>`
  }

}

Thing.all = [];
