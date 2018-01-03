class Adapter {

  static getAndSetActivities() {
    return fetch('http://localhost:3000/api/v1/activities')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(activity => {
        const act = new Activity(activity);
        const left = document.querySelector('.left-side');
        left.innerHTML += act.renderActivity();
      })
      EventListener.activityListener()
    })
  }

  static getThings() {
    return fetch('http://localhost:3000/api/v1/things')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(thingObj => {
        const thing = new Thing(thingObj);
        // const parentDiv = document.getElementById(`${thing.categoryId}`);
        // parentDiv.innerHTML += Category.renderCatThings(thing);
      })
    })
  }

  static getCategories() {
    return fetch('http://localhost:3000/api/v1/categories')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(cat => {
        const category = new Category(cat);
        const middle = document.querySelector('.middle');
        middle.innerHTML += category.renderCategory();
        category.renderAccordionToggle();
      })
    })
  }

}
