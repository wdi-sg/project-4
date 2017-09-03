class BookroomsController < ApplicationController
  def index
  end

  def create
    render json: params
    #
    # @new_room = Bookroom.create(params.require(:bookroom).permit(:date_start, :time_start, :time_end))
    # @new_room.user_id = '1'
    #
    # room = Meetingroom.find_by(room_title: params[:bookroom][:meetingroom])
    # @new_room.meetingroom_id = room.id
    #
    # @new_room.price = room.pax * 10
    # @new_room.save
    # render json: @new_room
    # new_room.date_start = params[:bookroom][:date_start]
    # new_room.time_start = params[:bookroom][:time_start]
    # new_room.time_end = params[:bookroom][:time_end]
    # new_room.save
  end

  def new
    @new_room = Bookroom.new
    @room_title = Meetingroom.distinct.pluck(:room_title).sort
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
