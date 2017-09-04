class CreateMeetingrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :meetingrooms do |t|
      t.integer :pax
      t.boolean :availability

      t.timestamps
    end
  end
end
