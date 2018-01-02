class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :activity_things
  has_many :things, through: :activity_things
  has_many :trips
  has_many :users, through: :trips

end
