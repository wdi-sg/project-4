class EventsController < ApplicationController
  def index
    @all_events = Event.all.reverse
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
        Event.create(params.require(:event).permit(:title,:description,:venue,:total_slots,:price_pax,:event_start,:event_end))
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
  end

  def update
  end

  def destroy
  end



end
