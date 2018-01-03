class Activity {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.image = `../front_end/images/${data.name.toLowerCase()}.jpeg`
    Activity.all.push(this);
  }

  renderActivity() {
    return   `<div class="gallery" id="${this.id}">
                    <img src="${this.image}" alt="${this.name}">
                    <div class="desc">${this.name}</div>
              </div> `
  }

}

Activity.all = [];
