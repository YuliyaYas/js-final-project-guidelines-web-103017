class Activity {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    Activity.all.push(this);
  }
  render(){
    
  }

}

Activity.all = [];
