class BiosController < ApplicationController

  def index
    @bios = Bio.all
  end

  def new
    render :template => "users/show"
  end
end
