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
    })
  }

  static getThings() {
    return fetch('http://localhost:3000/api/v1/things')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(thingObj => {
        const thing = new Thing(thingObj);
        const parentButton = document.querySelector(`button#${thing.categoryId} div`);
        parentButton.innerHTML += thing.renderCatThings();
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
        // category.things.forEach(thing => {
        //   thing.renderCatThings();
        // })
      })
    })
  }

}
