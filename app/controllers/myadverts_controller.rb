class MyadvertsController < ApplicationController

  def index
    @myadverts = Advert.where("user_id= #{current_user.id}")
  end

  def edit
    @advert = Advert.find(params[:id])
  end

  def destroy
    promo_to_delete = Advert.find(params[:id])
    promo_to_delete.destroy
    redirect_to myadverts_path
  end

end
