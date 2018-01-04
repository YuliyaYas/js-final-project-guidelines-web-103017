document.addEventListener("DOMContentLoaded", () => {
  Adapter.getUsers();
  Adapter.getAndSetActivities();
  Adapter.getCategories();
  Adapter.getThings();
  EventListener.activityListener();
  EventListener.formListenerTake2();
})
