class EventsController < ApplicationController
  def index


    b= []
    all_events = Event.find(1).event_start
    # @all_events = DateTime.parse(all_events).strftime('%y %m %d %H:%M:%S')
    b<<@all_events
    @time = DateTime.now.localtime.strftime('%y %m %d %H:%M:%S')
    b<<@time

    c = '17 08 31 12:16:04'
    b<<c

    d = @time>c
    # strftime('%d/%m/%Y %I:%M %p')

    l= []
    lemon= Event.find(2).event_start
    nows= DateTime.now.change(:offset => "+0000")
    men= lemon>nows
    l << lemon
    l << nows
    l << men
    Time.now.strftime("%:z")
    b<<d
    @all_events = Event.where('event_start>?', DateTime.now.change(:offset => "+0000"))




  end

  def create
    # render json: params

    time2 = params[:event][:event_end]
    time = params[:event][:event_start]
    # p (DateTime.parse(time2) > DateTime.parse(time))
    # p time
    # p DateTime.parse(time).to_i
    # p DateTime.now.to_i + 28800
    # p (DateTime.parse(time).to_i  < DateTime.now.to_i+28800)



# convert to seconds and add 8h time difference
    if (DateTime.parse(time).to_i > DateTime.now.to_i + 28800)

      if (DateTime.parse(time2) > DateTime.parse(time))
        new_event = Event.create(params.require(:event).permit(:title,:description,:venue,:total_slots,:price_pax,:event_start,:event_end,:event_image))
        new_event.remaining_slots = params[:event][:total_slots]
        new_event.save!

        redirect_to events_path
      else
        flash[:notice] ='End date/ time must be greater than start date/time'
        redirect_to new_event_path
      end

    else
      flash[:notice] ='Start date/time must be greater than current time'
      redirect_to new_event_path
    end

  end


  def new
    @new_event = Event.new
    # render html: "hhh"
  end

  def edit
  end

  def show
    @event = Event.find(params[:id])
    @new_reservation = Bookevent.new
    @current_booking = Bookevent.where("event_id = #{params[:id]}").sum(:no_pax)
  end

  def update
  end

  def destroy
  end

end
