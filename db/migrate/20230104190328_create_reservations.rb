class CreateReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :reservations do |t|
      t.string :firstname
      t.string :lastname
      t.string :address
      t.datetime :date_of_birth
      t.string :sex
      t.integer :tel_no
      t.string :nationality
      t.string :id_number
      t.string :email
      t.string :occupation
      t.datetime :date_of_entry
      t.integer :length_of_stay
      t.string :first_ref_name
      t.integer :first_ref_number
      t.string :second_ref_name
      t.integer :second_ref_number
      t.integer :user_id
      t.integer :apartment_id

      t.timestamps
    end
  end
end
