class Activity {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.image = `../front_end/images/${data.name.toLowerCase()}.jpeg`
    this.things = [...data.things]
    Activity.all.push(this);
  }

  renderActivity() {
    return   `<div class="gallery" id="${this.id}">
                    <img id="${this.name}" src="${this.image}" alt="${this.name}">
                    <div id="${this.name}" class="desc">${this.name}</div>
              </div> `
  }

}

Activity.all = [];
