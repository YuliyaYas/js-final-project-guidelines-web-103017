class User < ApplicationRecord
  has_many :trips, dependent: :destroy
  has_many :activities, through: :trips, dependent: :destroy
end
