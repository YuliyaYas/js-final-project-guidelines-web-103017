document.addEventListener("DOMContentLoaded", () => {
  Adapter.getUsers();
  Adapter.getTrips();
  Adapter.getAndSetActivities();
  Adapter.getCategories();
  Adapter.getThings();
  EventListener.activityListener();
  EventListener.formListenerTake2();
  EventListener.deleteTripListener();
})
