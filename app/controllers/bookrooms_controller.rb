class BookroomsController < ApplicationController
  before_action :check_valid_date,
    only: [:slots]

  def index
    @bookings = Bookroom.all
  end

  def create
    # date_today = Date.today.strftime("%d/%m/%Y")
    # date_picked = params[:bookroom][:date_start]
    # #
    # # p Date.today.strftime("%d/%m/%Y") < "07/10/2018"
    # time_now = Time.parse(Time.now.strftime("%I:%M %p")).to_i
    # time_picked =  Time.parse(params[:bookroom][:slot][1]).to_i
    #
    # # render json: params
    #
    # if date_today > date_picked
    #   flash[:notice] ='Please do not pick a day before today'
    #   redirect_to new_bookroom_path
    # else
    # # if date_today <= date_picked
    #   if time_now > time_picked
    #     flash[:notice] ='Please do not pick a time before now'
    #     redirect_to new_bookroom_path
    #   else
    #     flash[:notice] ='SAVED'
    #     redirect_to new_bookroom_path
    #   # end
    # end
  # end

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
    params[:bookroom][:slot].each do |slot|
      if slot != ""
        @bookroom = Bookroom.create(params.require(:bookroom).permit(:date_start, :meetingroom_id))
        @bookroom.slot = slot
        @bookroom.price = 10
        @bookroom.user_id = current_user.id
        @bookroom.save
      end
    end
    redirect_to bookrooms_path
  end

  def slots
    @available_slots = ['7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM']
    # render json: params
    roomID = Meetingroom.find_by(room_title: params[:bookroom][:meetingroom_id]).id
    @bookroom = Bookroom.new
    @bookroom.meetingroom_id = roomID
    @bookroom.date_start = params[:bookroom][:date_start]

    slots = Bookroom.where(meetingroom_id: roomID)
    taken_slots = slots.map {|slot| slot.slot}
    @available_slots = @available_slots - taken_slots
  end

  def new
    @bookroom = Bookroom.new
    @meetingrooms = Meetingroom.all
  end

  def edit
  end

  def show
  end

  def update
  end

  def destroy
  end

  private

  def check_valid_date
    if Date.today > Date.parse(params[:bookroom][:date_start])
      flash[:date_error] = "Please input a valid date"
      redirect_to new_bookroom_path
    end
  end

end
