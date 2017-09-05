class BookroomsController < ApplicationController
  def index
  end

  def create
    date_today = Date.today.strftime("%d/%m/%Y")
    date_picked = params[:bookroom][:date_start]
    #
    # p Date.today.strftime("%d/%m/%Y") < "07/10/2018"
    time_now = Time.parse(Time.now.strftime("%I:%M %p")).to_i
    time_picked =  Time.parse(params[:bookroom][:slot][1]).to_i

    # render json: params

    if date_today > date_picked
      flash[:notice] ='Please do not pick a day before today'
      redirect_to new_bookroom_path
    else
    # if date_today <= date_picked
      if time_now > time_picked
        flash[:notice] ='Please do not pick a time before now'
        redirect_to new_bookroom_path
      else
        flash[:notice] ='SAVED'
        redirect_to new_bookroom_path
      # end
    end
  end

  # times = params[:bookroom][:slot]
  #
  # times.each_with_index do |i, index|
  #   if (i.length > 0)
  #
  #     @new_room = Bookroom.create(params.require(:bookroom).permit(:meetingroom_id, :date_start, :slot, :user_id, :price))
  #     @new_room.user_id = 1
  #
  #     room = Meetingroom.find_by(room_title: params[:bookroom][:meetingroom])
  #     @new_room.meetingroom_id = room.id
  #
  #     @new_room.price = 10
  #
  #     # @slot = params[:bookroom][:slot][index]
  #     slot = Slot.find_by(time_start: params[:bookroom][:slot][index])
  #     @new_room.slot = slot.id
  #     @new_room.save!
  #   end
  # end
  # render json: params
  # # save
end




  def new
    @new_room = Bookroom.new
    @room_title = Meetingroom.distinct.pluck(:room_title).sort

    @taken_slots = Bookroom.distinct.pluck(:date_start)
    @taken_slots = Bookroom.where(date_start: @taken_slots)

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
