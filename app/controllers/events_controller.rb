class EventsController < ApplicationController
  def index
    render html:"hhh"
  end

  def create
  end

  def new
    @new_event = Eventroom.new
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
