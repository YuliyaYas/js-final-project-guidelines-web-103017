class AddLocationToTrips < ActiveRecord::Migration[5.1]
  def change
    add_column :trips, :location, :string
  end
end
