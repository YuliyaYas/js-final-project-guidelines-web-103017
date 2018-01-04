class Category {
  constructor(json) {
    this.name = json.name;
    this.id = json.id;
    this.things = [...json.things];
    Category.all.push(this);
  }

  renderCategory() {
   return `<button class="accordion">${this.name}</button>
             <div class="panel"><ul id="${this.id}" class="thing-list"></ul></div>`
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

  static renderSaveForm() {
    const formDiv = document.querySelector('.form');
    formDiv.innerHTML = `
            <p>Add a New Trip</p>

            <form class="add-trip" action="index.html" method="post">
                <input id="trip-location" type="text" placeholder="Enter Destination" value=""><br>
                <label>Enter Start Date:</label>
                <input id="start-date" type="date"><br>
                <label>Enter End Date:</label>
                <input id="end-date" type="date"><br>
                <input type="submit" value="Add Trip">
            </form>`
  }

}

Category.all = [];
