class AssetsController < ApplicationController
  before_action :isAdmin
  before_action :check_valid_member,
    only: [:create]
  before_action :check_valid_date,
    only: [:create]

  def index
    @assets = Asset.all
  end

  def show
    @asset = Asset.find_by_id(params[:id])
  end

  def new
    @asset = Asset.new
  end

  def create
    @asset = Asset.create(params.require(:asset).permit(:asset_type, :user_id, :date_start, :date_end))
    # @asset.save
    redirect_to spaces_path
  end

  private

  def check_valid_member
    if !User.find_by_id(params[:asset][:user_id])
      flash[:member_error] = "No user by that ID"
      redirect_to new_space_path
    end
  end

  def check_valid_date
    if Date.today > Date.parse(params[:asset][:date_start]) ||
       Date.today > Date.parse(params[:asset][:date_end]) ||
       Date.parse(params[:asset][:date_start]) > Date.parse(params[:asset][:date_end]) ||
       (Date.parse(params[:asset][:date_end]) - Date.parse(params[:asset][:date_start])) <= 10
      flash[:date_error] = "Invalid Date"
      redirect_to new_space_path
    end
  end

  def isAdmin
    if !current_user.isAdmin
      redirect_to '/'
    end
  end

end
