class EventListener {

  static activityListener(){
    const image = document.getElementsByClassName('gallery');
    const middle = document.querySelector('.middle');
    for (var i = 0; i < image.length; i++) {
      image[i].addEventListener("click", e => {
        // debugger
        Category.all.forEach(cat => {
          let ul = document.getElementById(`${cat.id}`)
          ul.innerHTML = ""
        })
        let name = e.target.id;
        let activity = Activity.all.find(x => x.name === name)
        activity.things.forEach(thing => {
          let frontThing = Thing.all.find(x => thing.id === x.id)
          const parentDiv = document.getElementById(`${frontThing.categoryId}`);
          parentDiv.innerHTML += Category.renderCatThings(frontThing)
        })
      })
    }
  };

}
