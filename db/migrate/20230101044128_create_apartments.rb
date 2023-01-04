class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :apt_type
      t.integer :apt_number
      t.integer :price
      t.boolean :status

      t.timestamps
    end
  end
end
