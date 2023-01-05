class CreateUserreservations < ActiveRecord::Migration[6.1]
  def change
    create_table :userreservations do |t|

      t.timestamps
    end
  end
end
