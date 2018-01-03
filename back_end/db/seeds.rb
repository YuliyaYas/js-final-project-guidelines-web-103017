Activity.destroy_all
User.destroy_all
Category.destroy_all
Trip.destroy_all
Thing.destroy_all
ActivityThing.destroy_all

jake = User.create(name: "Jake", email: "j@gmail.com")

beach = Activity.create(name: "Beach")
camping = Activity.create(name: "Camping")
city_trip = Activity.create(name: "City Trip")
climbing = Activity.create(name: "Climbing")
cruise = Activity.create(name: "Cruise")
diving = Activity.create(name: "Diving")
fishing = Activity.create(name: "Fishing")
golf = Activity.create(name: "Golf")
hiking = Activity.create(name: "Hiking")
skiing = Activity.create(name: "Skiing")
surfing = Activity.create(name: "Surfing")
tennis = Activity.create(name: "Tennis")

clothes = Category.create(name: "Clothes")
electronics = Category.create(name: "Electronics")
food = Category.create(name: "Food")
gear = Category.create(name: "Gear")
toiletries = Category.create(name: "Toiletries")

charger = Thing.create(name: "Charger", category: electronics)
phone = Thing.create(name: "Phone", category: electronics)
undergarments = Thing.create(name: "Undergarments", category: clothes)
hat = Thing.create(name: "Hat", category: clothes)
socks = Thing.create(name: "Socks", category: clothes)
coffee = Thing.create(name: "Coffee", category: food)
snacks = Thing.create(name: "Snacks", category: food)
tennis_racket = Thing.create(name: "Tennis Racket", category: gear)
skis = Thing.create(name: "Skis", category: gear)
toothbrush = Thing.create(name: "Toothbrush", category: toiletries)
toothpaste = Thing.create(name: "Toothpaste", category: toiletries)
bug_spray = Thing.create(name: "Bug Spray", category: toiletries)

ski_trip = Trip.create(user: jake, activity: skiing, start_date: "2018-02-16", end_date: "2018-02-24")
hiking_trip = Trip.create(user: jake, activity: hiking, start_date: "2018-03-15", end_date: "2018-03-16")
