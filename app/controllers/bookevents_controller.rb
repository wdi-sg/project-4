class BookeventsController < ApplicationController

  def create
    event_price = Event.find(params[:bookevent][:event_id])[:price_pax]
    new_booking= Bookevent.create(params.require(:bookevent).permit(:no_pax,:event_id))
    new_booking.user_id = current_user[:id]
    new_booking.price_pax = event_price
    new_booking.total_price = event_price * params[:bookevent][:no_pax].to_i
    new_booking.save!


    render json: new_booking
  end
end
