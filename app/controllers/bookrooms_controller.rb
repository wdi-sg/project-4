class BookroomsController < ApplicationController
  def index
  end

  def create
    render json: params[:bookroom][:slot]
    #
    times = params[:bookroom][:slot]

    times.each_with_index do |i, index|
      if (i.length > 0)
        @new_room = Bookroom.create(params.require(:bookroom).permit(:meetinmeetingroom_id, :date_start, :slot, :user_id, :price))
        @new_room.user_id = '1'

        room = Meetingroom.find_by(room_title: params[:bookroom][:meetingroom])
        @new_room.meetingroom_id = room.id

        @new_room.price = '10'
        @new_room.slot = params[:bookroom][:slot][index]
        @new_room.save
      end
  end

    # render json: @new_room
    # new_room.date_start = params[:bookroom][:date_start]
    # new_room.time_start = params[:bookroom][:time_start]
    # new_room.time_end = params[:bookroom][:time_end]
    # new_room.save
  end

  def new
    @new_room = Bookroom.new
    @room_title = Meetingroom.distinct.pluck(:room_title).sort
    @slot = Slot.all
    @slot_avail = []
    @slot.each do |i|
      @slot_avail << i.time_start
    end
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
