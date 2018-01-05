class Adapter {

  static getAndSetActivities() {
     fetch('http://localhost:3000/api/v1/activities')
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
     fetch('http://localhost:3000/api/v1/things')
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
     fetch('http://localhost:3000/api/v1/categories')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(cat => {
        const category = new Category(cat);
        const middle = document.querySelector('.middle');
        middle.innerHTML += category.renderCategory();
        category.renderAccordionToggle();
      })
      const middie = document.querySelector('.middle');
      // middle.innerHTML += Category.renderThingForm();
    })
  }

  static createThing(thing, catId, activityId) {
     fetch('http://localhost:3000/api/v1/things', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: `${thing}`,
        category_id: `${catId}`,
        activity_id: `${activityId}`
      })
    }).then(resp => resp.json()).then(json => {
      const thingy = new Thing(json);
      const catFinder = Category.all.find(x => x.id === thingy.categoryId);
      const target = document.getElementById(`${catFinder.id}`);
      const lis = document.querySelectorAll('li');
      const lisArray = [...lis];
      if (!lisArray.find(x => x.innerText === thingy.name)) {
        target.innerHTML += Category.renderCatThings(thingy);
      }
      Adapter.updateActivities(activityId, thingy.id)
    })
  }

  static updateActivities(activityId, thingId) {
     fetch(`http://localhost:3000/api/v1/activities/${activityId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        thing_id: `${thingId}`
      })
    }).then(resp => resp.json()).then(json => {
      const activity = Activity.all.find(x => x.id === json.id);
      const thing = Thing.all.find(y => y.id === thingId);
      activity.things.push(thing);
    })
  }

  static getUsers() {
     fetch('http://localhost:3000/api/v1/users')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(obj => {
        const user = new User(obj);
        const right = document.querySelector('#welcome-user');
        right.innerHTML = `<h3>Welcome, ${user.name}!</h3>`
      })
      User.renderTrips()
      EventListener.rightSideListener()
    })
  }

  static getTrips() {
     fetch('http://localhost:3000/api/v1/trips')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(obj => {
        const trip = new Trip(obj);
      })
    })
  }

  static addTrip(location, start_date, end_date, activity_id, user_id){
     fetch('http://localhost:3000/api/v1/trips', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        location: `${location}`,
        start_date: `${start_date}`,
        end_date: `${end_date}`,
        activity_id: `${activity_id}`,
        user_id: `${user_id}`
      })
    }).then(resp => resp.json())
    .then(json => {
      const trip =new Trip(json);
      console.log(trip);
      trip.renderUserTrip();


    })
  }

  static deleteTrip(id) {
    const element = document.getElementById(`${id}`);
    element.remove();
    Trip.all.filter(x => x.id !==id);
    fetch(`http://localhost:3000/api/v1/trips/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })

  }

}
