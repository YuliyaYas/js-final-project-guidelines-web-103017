class User {
  constructor(json) {
    this.name = json.name;
    this.email = json.email;
    this.id = json.id;
    this.activities = [...json.activities];
    this.trips = [...json.trips];
    User.all.push(this);
  }

  static renderTrips() {
    const user = User.all[0];
    user.trips.forEach(trip => {
      const area = document.querySelector('.trip-list');
      area.innerHTML += `<div id="${trip.id}">${trip.location}</div>`
    })
  }


}

User.all = [];
