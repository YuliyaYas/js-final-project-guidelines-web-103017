class User < ApplicationRecord
  has_many :trips
  has_many :activities, through: :trips
end
