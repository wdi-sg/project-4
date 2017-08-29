class Bookevent < ApplicationRecord
  belongs_to :eventroom
  belongs_to :user
end
