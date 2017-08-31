class UsersController < ApplicationController
  def index
    @user = User.all
  end

  def show
    @user = User.find_by_id(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(params.require(:user).permit(:name, :email, :password, :isAdmin))
  end
end
