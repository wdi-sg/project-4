class CreateAdverts < ActiveRecord::Migration[5.1]
  def change
    create_table :adverts do |t|
      t.string :title
      t.string :advert_image
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
