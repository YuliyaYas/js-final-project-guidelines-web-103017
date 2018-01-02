class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email

  has_many :trips
  has_many :activities, through: :trips
  
end
