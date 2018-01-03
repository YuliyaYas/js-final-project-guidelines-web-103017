class Thing {
  constructor(json) {
    this.name = json.name;
    this.id = json.id;
    this.categoryId = json.category.id
    Thing.all.push(this);
  }

}

Thing.all = [];
