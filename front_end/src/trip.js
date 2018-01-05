class Trip {
  constructor(json) {
    this.location = json.location;
    this.startDate = json.start_date;
    this.endDate = json.end_date;
    this.userId = json.user.id;
    this.id = json.id;
    this.activityId = json.activity.id;
    Trip.all.push(this);
  }
  renderUserTrip(){
    const area = document.querySelector('.trip-list');
    area.innerHTML += `<div class="trips-style" id="${this.id}"><h4>${this.location}</h4>
                            Start Date: ${this.startDate}<br>
                            End Date: ${this.endDate}<br>
                            <button type="button" class="delete-button" id="${this.id}"> X </button>

                      </div><br></br>`

  }

}

Trip.all = [];
