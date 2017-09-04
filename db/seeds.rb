# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
4.times do |i|
  Slot.create({
    time_start: "#{7+i}:00 AM",
    time_end: "#{8+i}:00 AM"
    })
  end


  Slot.create({
    time_start: "11:00 AM",
    time_end: "12:00 PM"
    })

    Slot.create({
      time_start: "12:00 PM",
      time_end: "1:00 PM"
      })


  6.times do |i|
    Slot.create({
    time_start: "#{1+i}:00 PM",
    time_end: "#{2+i}:00 PM"
  })
  end


3.times do |i|
Meetingroom.create({
  room_title: "Room #{i+1}",
  pax: "#{i+5}",
  availability: true
  })
end
