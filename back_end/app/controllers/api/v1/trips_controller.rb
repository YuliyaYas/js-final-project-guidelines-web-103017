class Api::V1::TripsController < ApplicationController
  before_action :set_trip, only: [:show,:update,:destroy]

  def index
    trips = Trip.all
    render json: trips, status: 200
  end

  def create
    trip = Trip.create(trip_params)
    render json: trip, status: 201
  end

  def update
    @trip.update(trip_params)
    render json: @trip, status: 200
  end

  def destroy
    tripId = @trip.id
    @trip.destroy
    render json: {message:"Zap! trip deleted", tripId:tripId}
  end

  def show
    render json: @trip, status: 200
  end

  private
  def trip_params
    params.permit(:start_date, :end_date, :user_id, :activity_id)
  end

  def set_trip
    @trip = Trip.find(params[:id])
  end
end
