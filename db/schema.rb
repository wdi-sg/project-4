# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170903081031) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adverts", force: :cascade do |t|
    t.string "title"
    t.string "advert_image"
    t.string "description"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_adverts_on_user_id"
  end

  create_table "assets", force: :cascade do |t|
    t.string "asset_type"
    t.bigint "user_id"
    t.string "date_start"
    t.string "date_end"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_assets_on_user_id"
  end

  create_table "bookevents", force: :cascade do |t|
    t.bigint "event_id"
    t.bigint "user_id"
    t.integer "no_pax"
    t.integer "price_pax"
    t.integer "total_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_bookevents_on_event_id"
    t.index ["user_id"], name: "index_bookevents_on_user_id"
  end

  create_table "bookrooms", force: :cascade do |t|
    t.bigint "meetingroom_id"
    t.bigint "user_id"
    t.string "slot"
    t.integer "price"
    t.string "date_start"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["meetingroom_id"], name: "index_bookrooms_on_meetingroom_id"
    t.index ["user_id"], name: "index_bookrooms_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.string "event_start"
    t.string "event_end"
    t.integer "total_slots"
    t.integer "remaining_slots"
    t.string "event_image"
    t.string "venue"
    t.string "description"
    t.integer "price_pax"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meetingrooms", force: :cascade do |t|
    t.integer "pax"
    t.boolean "availability", default: true
    t.string "room_title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "slots", force: :cascade do |t|
    t.string "time_start"
    t.string "time_end"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.boolean "isAdmin", default: false, null: false
    t.string "name"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "adverts", "users"
  add_foreign_key "assets", "users"
  add_foreign_key "bookevents", "events"
  add_foreign_key "bookevents", "users"
  add_foreign_key "bookrooms", "meetingrooms"
  add_foreign_key "bookrooms", "users"
end
