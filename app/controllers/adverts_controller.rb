class AdvertsController < ApplicationController
  def index
    @adverts = Advert.all
  end

  def show
    @advert = Advert.find_by_id(params[:id])
  end

  def new
    @advert = Advert.new
  end

  def create

    @advert = Advert.create(params.require(:advert).permit(:description, :advert_image, :title))
    if !params[:advert][:advert_image]
      @advert.advert_image = 'http://res.cloudinary.com/ddanielnp/image/upload/c_scale,w_300/v1502804208/giftloop/ntbdvahkbycuxlecogcr.png'
    end
    @advert.user_id = current_user.id
    @advert.save

    redirect_to adverts_path
  end

end
