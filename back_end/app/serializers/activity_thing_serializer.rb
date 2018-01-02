class ActivityThingSerializer < ActiveModel::Serializer
  attributes :id
  
  belongs_to :thing
  belongs_to :activity
end
