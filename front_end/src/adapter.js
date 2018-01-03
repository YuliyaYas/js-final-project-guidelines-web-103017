class Adapter {

  static getAndSetActivities() {
    return fetch('http://localhost:3000/api/v1/activities')
    .then(resp => resp.json())
    .then(json => {
      json.forEach(activity => {
        const act = new Activity(activity);
        const left = document.querySelector('.left-side');
        console.log(left)
        left.innerHTML += act.renderActivity();
      })
    })
  }

}
