class Api::V1::ThingsController < ApplicationController
  before_action :set_thing, only: [:show,:update,:destroy]

  def index
    things = Thing.all
    render json: things, status: 200
  end

  def create
    thing = Thing.create(thing_params)
    thing.activities << Activity.find(params[:activity_id])
    render json: thing, status: 201
  end

  def update
    @thing.update(thing_params)
    render json: @thing, status: 200
  end

  def destroy
    thingId = @thing.id
    @thing.destroy
    render json: {message:"Zap! thing deleted", thingId:thingId}
  end

  def show
    render json: @thing, status: 200
  end

  private
  def thing_params
    params.permit(:name, :category_id)
  end

  def set_thing
    @thing = Thing.find(params[:id])
  end
end
