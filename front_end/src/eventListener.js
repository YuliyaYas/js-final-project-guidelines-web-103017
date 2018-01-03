class EventListener {

  static activityListener(){
    const image = document.getElementsByClassName('gallery');
    // debugger
    for (var i = 0; i < image.length; i++) {
      image[i].addEventListener("click", e => {
        // debugger
        let name = e.target.id;
        let activity = Activity.all.find(x => x.name === name)
        // console.log(activity.things);
        // Adapter.getCategories();
        // Adapter.getThings();
        activity.things.forEach(thing => {
          console.log(Thing.all);
          let frontThing = Thing.all.find(x => thing.id === x.id)
          const parentDiv = document.getElementById(`${frontThing.categoryId}`);
          parentDiv.innerHTML = Category.renderCatThings(frontThing)
        })
      })
    }

  };

}
