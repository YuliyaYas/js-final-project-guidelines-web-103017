class Category {
  constructor(json) {
    this.name = json.name;
    this.id = json.id;
    this.things = [...json.things];
    Category.all.push(this);
  }

  renderCategory() {
   return `<button class="accordion">${this.name}</button>
             <div class="panel"><ul id="${this.id}"></ul></div>`
 }

 static renderCatThings(thing) {
 return `<li><input type="checkbox"/>${thing.name}</li>`
}

  renderAccordionToggle() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
  }

}

Category.all = [];
