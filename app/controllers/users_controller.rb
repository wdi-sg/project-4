class UsersController < ApplicationController
    before_action :isAdmin, except: [:show, :transactions]

  def index
    @user = User.all
  end

  def show
    @bookings = Bookroom.where(user_id: @user)

    @user = User.find_by_id(params[:id])
    @booking_groups_by_date_start =
    Bookroom.select('user_id, date_start, count(*) as total_bookings')
            .group('user_id', 'date_start')
            .having('user_id = ?', current_user.id)

    @allBookingsPerGroup = []
    @booking_groups_by_date_start.each do |group|
      @allBookingsPerGroup << Bookroom.where(user_id: current_user.id, date_start: group.date_start)
    end

    # @bookings_date = Bookroom.where(user_id: @user, date_start: "09/09/2017")
    # @dategroup = Bookroom.includes(:date_start)
    @events = Bookevent.where(user_id: @user)
    @all_events = Event.where('event_start>?',
    DateTime.now.change(:offset => "+0000"))

    # @bookings = Bookroom.where(user_id: @user)
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(params.require(:user).permit(:name, :email, :password, :isAdmin))
    redirect_to create_users_path
  end

  def transactions
    user = current_user
    @reservations = Bookroom.where(user_id: user)
  end

  private

  def isAdmin
    if !current_user.isAdmin
      redirect_to '/'
    end
  end
end
