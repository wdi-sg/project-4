class SpacesController < ApplicationController
  before_action :isAdmin
  before_action :check_valid_member,
    only: [:update]
  before_action :check_valid_date,
    only: [:update]

  def index
    @spaces = Space.all.order(:space_type)
  end

  def show
    @space = Space.find_by_id(params[:id])
  end

  def new
    @space = Space.new
  end

  def create
    @space = Space.create(params.require(:space).permit(:space_type, :user_id, :date_start, :date_end))
    # @Space.save
    redirect_to spaces_path
  end

  def edit
    # render json: Space.find(params[:id])
      @current_space = Space.find(params[:id])
  end

  def destroy
    space_to_delete = Space.find(params[:id])
    space_to_delete.destroy
    redirect_to spaces_path

  end

  def update
    # render json: params
    to_update = Space.find(params[:id])
    new_details = params.require(:space).permit(:space_type, :user_id, :date_start, :date_end)
    to_update.update(new_details)
    flash[:notice] ='Details successfully changed'

    redirect_to spaces_path
  end

  private

  def check_valid_member
    if !User.find_by_id(params[:space][:user_id])
      flash[:notice1] = "No user by that ID"
      redirect_to edit_space_path(params[:id])
    end
  end

  def check_valid_date
    if Date.today > Date.parse(params[:space][:date_start]) ||
       Date.today > Date.parse(params[:space][:date_end]) ||
       Date.parse(params[:space][:date_start]) > Date.parse(params[:space][:date_end]) ||
       (Date.parse(params[:space][:date_end]) - Date.parse(params[:space][:date_start])) <= 10
      flash[:notice2] = "Invalid Date"
      redirect_to edit_space_path(params[:id])
    end
  end

  def isAdmin
    if !current_user.isAdmin
      redirect_to '/'
    end
  end

end
