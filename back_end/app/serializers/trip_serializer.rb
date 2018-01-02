class TripSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date

  belongs_to :user
  belongs_to :activity

end
