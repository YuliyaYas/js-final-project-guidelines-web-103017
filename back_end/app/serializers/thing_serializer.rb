class ThingSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :category
  has_many :activity_things
  has_many :activities, through: :activity_things

end
