class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: [:show,:update,:destroy]

  def index
    categories = Category.all
    render json: categories, status: 200
  end

  def create
    category = Category.create(category_params)
    render json: category, status: 201
  end

  def update
    @category.update(category_params)
    render json: @category, status: 200
  end

  def destroy
    categoryId = @category.id
    @category.destroy
    render json: {message:"Zap! category deleted", categoryId:categoryId}
  end

  def show
    render json: @category, status: 200
  end

  private
  def category_params
    params.permit(:name)
  end

  def set_category
    @category = Category.find(params[:id])
  end
end
