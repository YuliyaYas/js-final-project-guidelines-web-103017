document.addEventListener("DOMContentLoaded", () => {
  Adapter.getAndSetActivities();

  Adapter.getCategories();
  // Adapter.getThings();
  EventListener.activityListener()

})
