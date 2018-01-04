class Api::V1::ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show,:update,:destroy]

  def index
    activities = Activity.all
    render json: activities, status: 200
  end

  def create
    activity = Activity.create(activity_params)
    render json: activity, status: 201
  end

  def update
    @activity.things << Thing.all.find(params[:thing_id])
    render json: @activity, status: 200
  end

  def destroy
    activityId = @activity.id
    @activity.destroy
    render json: {message:"Zap! activity deleted", activityId:activityId}
  end

  def show
    render json: @activity, status: 200
  end

  private
  def activity_params
    params.permit(:name)
  end

  def set_activity
    @activity = Activity.find(params[:id])
  end
end
