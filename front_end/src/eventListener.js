class EventListener {

  static activityListener(){
    const image = document.getElementsByClassName('gallery');
    const middle = document.querySelector('.middle');
    for (var i = 0; i < image.length; i++) {
      image[i].addEventListener("click", e => {
        // debugger
        Category.all.forEach(cat => {
          let ul = document.getElementById(`${cat.id}`)
          ul.innerHTML = Thing.renderThingForm(cat.id);
          // Category.thingFormListener();
        })
        let name = e.target.id;
        let activity = Activity.all.find(x => x.name === name)
        let titleMiddle = document.getElementById('list')
        titleMiddle.innerHTML = `<h3>${name}</h3>`
        activity.things.forEach(thing => {
          let frontThing = Thing.all.find(x => thing.id === x.id)
          const parentDiv = document.getElementById(`${frontThing.categoryId}`);
          const lis = document.querySelectorAll('li');
          const lisArray = [...lis];
          if (!lisArray.find(x => x.innerText === frontThing.name)) {
              parentDiv.innerHTML += Category.renderCatThings(frontThing)          }
          // parentDiv.innerHTML += Thing.renderThingForm();
        })
        Category.renderSaveForm();
        EventListener.addTripEventListener()
      })
    }
  };

  // static thingFormListener() {
  //   const thingForms = document.getElementsByClassName('add-thing');
  //   console.log(thingForms)
  //   for (var i = 0; i < thingForms.length; i++) {
  //     debugger
  //     thingForms[i].addEventListener("click", e => {
  //       console.log(e.target)
  //     })
  //   }
  //
  // }

  static formListenerTake2() {
    const middle = document.getElementById('middle');
    middle.addEventListener('click', e => {
      if (e.target.className === "add-thing") {
        const newThing = document.querySelector(`[data-id="${e.target.id}"]`).value;
        const catId = e.target.id;
        const activityName = document.querySelector('#list h3').innerText;
        const activityId = Activity.all.find(x => x.name === activityName).id;


        Adapter.createThing(newThing, catId, activityId);
      }
    })
  }

  static rightSideListener() {
    const right = document.getElementById('right-side');
    right.addEventListener('click', e => {
      if (e.target.className === "trips-style") {
        const formDiv = document.querySelector('.form');
        formDiv.innerHTML= ""
        const trip = User.all[0].trips.find(x => x.id === parseInt(e.target.id));
        const activityId = Trip.all.find(y => y.id === trip.id).activityId;
        const actualActivity = Activity.all.find(z => z.id === activityId);
        Category.all.forEach(cat => {
          let ul = document.getElementById(`${cat.id}`)
          ul.innerHTML = Thing.renderThingForm(cat.id);
        })
        let titleMiddle = document.getElementById('list')
        titleMiddle.innerHTML = `<h3>${trip.location} - ${actualActivity.name}</h3>`
        actualActivity.things.forEach(thing => {
          let frontThing = Thing.all.find(x => thing.id === x.id)
          const parentDiv = document.getElementById(`${frontThing.categoryId}`);
          const lis = document.querySelectorAll('li');
          const lisArray = [...lis];
          if (!lisArray.find(x => x.innerText === thing.name)) {
            parentDiv.innerHTML += Category.renderCatThings(frontThing)

          }

          // parentDiv.innerHTML += Thing.renderThingForm();
        })
        // EventListener.deleteTripListener();
      }
    })
  }

  static addTripEventListener(){
    const form = document.querySelector('.add-trip');
    form.addEventListener("submit", e => {
      e.preventDefault();
      const location = document.getElementById('trip-location').value;
      const startDate = document.getElementById('start-date').value;
      const endDate = document.getElementById('end-date').value;
      const activityName = document.querySelector('#list h3').innerHTML;
      const activityId = Activity.all.find(x => x.name === activityName).id;
      const userId = User.all[0].id;

      Adapter.addTrip(location, startDate, endDate, activityId, userId);

      // EventListener.rightSideListener()

    })
  }

  static deleteTripListener(){
    document.addEventListener('click', e => {
      if (e.target.className === "delete-button") {
        const id = parseInt(e.target.id);
        Adapter.deleteTrip(id);
      }
    })
  }

}
