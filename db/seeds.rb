# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)
#
# 3.times do |i|
# Meetingroom.create({
#   room_title: "Room #{i+1}",
#   pax: "#{i+5}",
#   availability: true
#   })
# end
#
# Event.create({
#   title: 'mmm',
#   event_start: '2017-09-05 18:30:00',
#   event_end: '2017-09-05 19:30:00'
#   })
#
#   Event.create({
#     title: 'Movie screening',
#     event_start: '2017-09-05 21:30:00',
#     event_end: '2017-09-05 23:30:00',
#     total_slots: 100,
#     remaining_slots: 100,
#     event_image: 'https://res.cloudinary.com/ddanielnp/image/upload/c_scale,h_400/v1504690598/giftloop_events/yrihdqnftjvbxmqzqgtz.jpg',
#     description: "Come kill some white walkers. Kill the Night King. Fly with Daenerys and her dragons to the North of the wall.",
#     price_pax: 10
#     })
#
#     Event.create({
#       title: "Where's Wally?",
#       event_start: '2017-09-10 18:30:00',
#       event_end: '2017-09-10 20:30:00',
#       total_slots: 100,
#       remaining_slots: 100,
#       event_image: 'https://res.cloudinary.com/ddanielnp/image/upload/c_scale,h_400/v1504690598/giftloop_events/yrihdqnftjvbxmqzqgtz.jpg',
#       description: "Where's Wally?, published in the US as Where's Waldo?, is a British series of children's books created by the English illustrator Martin Handford.",
#       price_pax: 10
#       })
#
# User.create({
#   name: 'admin',
#   email: 'admin@hatchpodz.com',
#   isAdmin: true,
#   password: 'admin123'
#   })
#
  Bookevent.create({
  event_id: 1,
  user_id: 1,
  no_pax: 10,
  price_pax: 10,
  total_price: 100
    })

    Bookevent.create({
    event_id: 2,
    user_id: 1,
    no_pax: 10,
    price_pax: 10,
    total_price: 100
      })

      Bookevent.create({
      event_id: 3,
      user_id: 1,
      no_pax: 10,
      price_pax: 10,
      total_price: 100
        })
