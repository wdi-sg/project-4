class StaticController < ApplicationController
    before_action :authenticate_user!

    def home
    end

    def show
      @user = User.find_by_username(params[:id])
    end


end
