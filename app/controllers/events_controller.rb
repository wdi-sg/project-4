class EventsController < ApplicationController
  def index
    render html:"hhh"
  end

  def create


    # render json: params
    # var time_diff = params[:event][:event_end] - params[:event][:event_start]
    time2 = params[:event][:event_end]
    time = params[:event][:event_start]
    p (DateTime.parse(time2) > DateTime.parse(time))
    p (DateTime.parse(time) > Time.now)
    p DateTime.parse(time)
    p Time.now
    p DateTime.now


    if (DateTime.parse(time2) > DateTime.parse(time))
      Event.create(params.require(:event).permit(:title,:description,:venue,:total_slots,:price_pax,:event_start,:event_end))
    else
      flash[:notice] ='End date/ time must be after start date/time'
      redirect_to new_event_path
    end
    # new_event=
    # Event.create(params.require(:event).permit(:title,:description,:venue,:total_slots,:price_pax,:event_start,:event_end))
    #
    # render json: new_event
  end


  def new
    @new_event = Event.new
    # render html: "hhh"
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
