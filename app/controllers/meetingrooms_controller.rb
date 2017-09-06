class MeetingroomsController < ApplicationController
  before_action :isAdmin
  def index
    @meetingrooms = Meetingroom.all
  end

  def create
    # render json: params
    Meetingroom.create(params.require(:meetingroom).permit(:room_title, :pax, :price_hr))
    redirect_to root_path
  end

  def new
    @new_meeting = Meetingroom.new
  end

  def edit
  end

  def update
  end

  def destroy
    room_to_delete = Meetingroom.find(params[:id])
    room_to_delete.destroy
    redirect_to meetingrooms_path
  end

  private

  def isAdmin
    if !current_user.isAdmin
      redirect_to '/'
    end
  end

end
