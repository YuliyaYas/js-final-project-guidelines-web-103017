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
          Category.thingFormListener();
        })
        let name = e.target.id;
        let activity = Activity.all.find(x => x.name === name)
        let titleMiddle = document.getElementById('list')
        titleMiddle.innerHTML = `<h4>${name}</h4>`
        activity.things.forEach(thing => {
          let frontThing = Thing.all.find(x => thing.id === x.id)
          const parentDiv = document.getElementById(`${frontThing.categoryId}`);
          parentDiv.innerHTML += Category.renderCatThings(frontThing)
          // parentDiv.innerHTML += Thing.renderThingForm();
        })
      })
    }
  };

  static thingFormListener() {
    const thingForms = document.getElementsByClassName('add-thing');
    console.log(thingForms)
    for (var i = 0; i < thingForms.length; i++) {
      debugger
      thingForms[i].addEventListener("click", e => {
        console.log(e.target)
      })
    }

  }

}
