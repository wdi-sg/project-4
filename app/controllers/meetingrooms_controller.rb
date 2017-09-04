class MeetingroomsController < ApplicationController
  def index
  end

  def create
    # render json: params
    Meetingroom.create(params.require(:meetingroom).permit(:room_title, :pax))
    redirect_to root_path
  end

  def new
    @new_meeting = Meetingroom.new
  end

  def edit
  end

  def show
  end

  def update
  end

  def destroy
  end

end
