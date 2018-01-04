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
    area.innerHTML += `<div style="background-color: white;" class="trippin" id="${this.id}">${this.location}<br>
                            <p>Start Date: ${this.start_date}<br>
                            End Date: ${this.end_date}</p>
                            <button type="button" class="delete-button" data-id="${this.id}"> X </button>

                      </div><br>`

  }

}

Trip.all = [];
