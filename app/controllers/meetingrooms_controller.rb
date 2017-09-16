class MeetingroomsController < ApplicationController
  before_action :isAdmin
  def index
    @meetingrooms = Meetingroom.all.reverse
  end

  def create
    # render json: params
    if params[:meetingroom][:room_title].include? "("
      flash[:notice] =' Parenthesis not allowed for room name '
      redirect_to new_meetingroom_path
    else
      Meetingroom.create(params.require(:meetingroom).permit(:room_title, :pax, :price_hr))
      redirect_to meetingrooms_path
    end
  end

  def new
    @new_meeting = Meetingroom.new
  end

  def edit
    @current_room = Meetingroom.find(params[:id])
  end

  def update
    # render json: params
    if params[:meetingroom][:room_title].include? "("
      flash[:notice] =' Parenthesis not allowed for room name '
      redirect_to edit_meetingroom_path(params[:id])
    else
      to_update = Meetingroom.find(params[:id])
      new_details = params.require(:meetingroom).permit(:room_title, :pax, :price_hr)
      to_update.update(new_details)
      flash[:notice] ='Details successfully changed'

      redirect_to meetingrooms_path
    end

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
