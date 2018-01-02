class Category < ApplicationRecord
  has_many :things, dependent: :destroy
end
