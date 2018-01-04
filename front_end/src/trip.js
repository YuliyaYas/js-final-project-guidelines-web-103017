class Trip {
  constructor(json) {
    this.location = json.location;
    this.startDate = json.start_date;
    this.endDate = json.end_date;
    this.userId = json.user.id;
    this.activityId = json.activity.id;
    Trip.all.push(this);
  }

}

Trip.all = [];
