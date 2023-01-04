# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_01_04_190328) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "apartments", force: :cascade do |t|
    t.string "apt_type"
    t.integer "apt_number"
    t.integer "price"
    t.boolean "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
  end

  create_table "reservations", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "address"
    t.datetime "date_of_birth"
    t.string "sex"
    t.integer "tel_no"
    t.string "nationality"
    t.string "id_number"
    t.string "email"
    t.string "occupation"
    t.datetime "date_of_entry"
    t.integer "length_of_stay"
    t.string "first_ref_name"
    t.integer "first_ref_number"
    t.string "second_ref_name"
    t.integer "second_ref_number"
    t.integer "user_id"
    t.integer "apartment_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
