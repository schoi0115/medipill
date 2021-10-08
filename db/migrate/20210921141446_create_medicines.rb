class CreateMedicines < ActiveRecord::Migration[6.1]
  def change
    create_table :medicines do |t|
      t.string :name
      t.integer :volume
      t.integer :maxdose
      t.float :dose
      t.text :memo 
      t.boolean :taken
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
