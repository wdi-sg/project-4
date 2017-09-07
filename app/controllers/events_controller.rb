class EventsController < ApplicationController
  before_action :isAdmin, except: [:index, :show]

  def index

    @all_events = Event.where('event_start>?', DateTime.now.change(:offset => "+0000"))

  end

  def create
    # render json: params

    time2 = params[:event][:event_end]
    time = params[:event][:event_start]

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

  end

  def edit
    @current_event = Event.find(params[:id])
  end

  def show
    @event = Event.find(params[:id])
    if @event.event_start < DateTime.now.change(:offset => "+0000")
      redirect_to '/events'
    end
    @new_reservation = Bookevent.new
    @current_booking = Bookevent.where("event_id = #{params[:id]}").sum(:no_pax)

  end

  def update
    # render json: params
    to_update = Event.find(params[:id])
    new_details = params.require(:event).permit(:title,:description,:venue,:total_slots,:price_pax,:event_start,:event_end,:event_image)
    to_update.update(new_details)
    flash[:notice] ='Event details successfully changed'

    redirect_to events_path
  end

  def destroy
    # render json: params
    event_to_delete = Event.find(params[:id])
    bookings_to_delete = Bookevent.where(event_id: params[:id])
    bookings_to_delete.each do |i|
      i.destroy
    end
    event_to_delete.destroy
    redirect_to events_path
  end

  private
  def isAdmin
    if !current_user.isAdmin
      redirect_to '/events'
    end
  end

end
