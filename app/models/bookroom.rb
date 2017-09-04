class Bookroom < ApplicationRecord
  belongs_to :meetingroom
  belongs_to :user
end
