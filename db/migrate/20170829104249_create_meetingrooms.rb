class CreateMeetingrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :meetingrooms do |t|
      t.integer :pax
      t.boolean :availability, default: true
      t.string :room_title

      t.timestamps
    end
  end
end
