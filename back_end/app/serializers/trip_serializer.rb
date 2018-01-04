class TripSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :location

  belongs_to :user
  belongs_to :activity

end
