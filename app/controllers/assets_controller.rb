class AssetsController < ApplicationController
  before_action :check_valid_member,
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
    @asset = Asset.create(params.require(:asset).permit(:asset_type, :user_id))
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

end
