class UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :isAdmin, except: [:show]

  def index
    @user = User.all
  end

  def show
    @user = User.find_by_id(params[:id])
    @bookings = Bookroom.where(user_id: @user)
    # @bookings_date = Bookroom.where(user_id: @user, date_start: "09/09/2017")
    # @dategroup = Bookroom.includes(:date_start)



  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(params.require(:user).permit(:name, :email, :password, :isAdmin))
    redirect_to create_users_path
  end

  private

  def isAdmin
    if !current_user.isAdmin
      redirect_to '/'
    end
  end
end
