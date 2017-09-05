class BookeventsController < ApplicationController

  def create
    target_event = Event.find(params[:bookevent][:event_id])
    event_price = target_event[:price_pax]
    # capacity = target_event[:total_slots]
    # Property.where(SEARCH_VALUES).sum(:value)
    if (params[:bookevent][:no_pax].to_i> target_event.remaining_slots)

      flash[:notice] =' Unsuccessful. Booking exceeds remaining_slots number '
      redirect_to event_path(params[:bookevent][:event_id])

    else

      new_booking= Bookevent.create(params.require(:bookevent).permit(:no_pax,:event_id))
      new_booking.user_id = current_user[:id]
      new_booking.price_pax = event_price
      new_booking.total_price = event_price * params[:bookevent][:no_pax].to_i
      new_booking.save!

        if new_booking.id
          target_event.remaining_slots = target_event.remaining_slots.to_i - params[:bookevent][:no_pax].to_i
          target_event.save!
        end

        flash[:notice] =' Booking successful!'

        redirect_to events_path

    end






  end
end
