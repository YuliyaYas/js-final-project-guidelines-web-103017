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
      area.innerHTML += `<div class="trips-style" id="${trip.id}"><h4>${trip.location}</h4>
                              Start Date: ${trip.start_date}<br>
                              End Date: ${trip.end_date}<br>
                              <button type="button" class="delete-button" id="${trip.id}"> X </button>

                        </div><br>`
    })
  }


}

User.all = [];
