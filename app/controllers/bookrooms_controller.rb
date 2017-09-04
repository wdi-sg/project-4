class BookroomsController < ApplicationController
  def index
  end

  def create
    render json: params
  end

  def new
    @new_room = Bookroom.new
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
