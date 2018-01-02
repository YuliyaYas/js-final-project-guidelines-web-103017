class Activity < ApplicationRecord
  has_many :activity_things, dependent: :destroy
  has_many :things, through: :activity_things, dependent: :destroy
  has_many :trips, dependent: :destroy
  has_many :users, through: :trips, dependent: :destroy
end
