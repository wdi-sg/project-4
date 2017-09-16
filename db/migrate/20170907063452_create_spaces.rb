class CreateSpaces < ActiveRecord::Migration[5.1]
  def change
    create_table :spaces do |t|
      t.string :space_type
      t.references :user, foreign_key: true
      t.string :date_start
      t.string :date_end

      t.timestamps
    end
  end
end
