Activity.destroy_all
User.destroy_all
Category.destroy_all
Trip.destroy_all
Thing.destroy_all
ActivityThing.destroy_all

jake = User.create(name: "Jake", email: "j@gmail.com")


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
surf_board = Thing.create(name: "Surf Board", category: gear)
swimsuit = Thing.create(name: "Swim Suit", category: clothes)
fishing_rod = Thing.create(name: "Fishing Rod", category: gear)

beach = Activity.create(name: "Beach", things: [phone, charger, socks, snacks, swimsuit])
camping = Activity.create(name: "Camping", things: [phone, charger, socks, snacks, undergarments])
city_trip = Activity.create(name: "City Trip", things: [phone, charger, socks, snacks, undergarments])
climbing = Activity.create(name: "Climbing", things: [phone, charger, socks, snacks, undergarments])
cruise = Activity.create(name: "Cruise", things: [phone, charger, socks, snacks, undergarments])
diving = Activity.create(name: "Diving", things: [phone, charger, socks, snacks, swimsuit])
fishing = Activity.create(name: "Fishing", things: [phone, charger, socks, snacks, undergarments, fishing_rod])
golf = Activity.create(name: "Golf", things: [phone, charger, socks, snacks, undergarments])
hiking = Activity.create(name: "Hiking", things: [phone, charger, socks, snacks, undergarments, bug_spray])
skiing = Activity.create(name: "Skiing", things: [phone, charger, socks, snacks, undergarments, skis])
surfing = Activity.create(name: "Surfing", things: [phone, charger, socks, snacks, swimsuit, surf_board])
tennis = Activity.create(name: "Tennis", things: [tennis_racket, phone, charger, socks, snacks, undergarments])

ski_trip = Trip.create(user: jake, activity: skiing, start_date: "2018-02-16", end_date: "2018-02-24")
hiking_trip = Trip.create(user: jake, activity: hiking, start_date: "2018-03-15", end_date: "2018-03-16")
