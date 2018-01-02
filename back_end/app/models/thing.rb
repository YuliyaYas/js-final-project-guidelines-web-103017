class Thing < ApplicationRecord
  belongs_to :category
  has_many :activity_things, dependent: :destroy
  has_many :activities, through: :activity_things, dependent: :destroy
end
