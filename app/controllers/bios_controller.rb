class BiosController < ApplicationController

  def index
    @bios = Bio.all
  end

  def new
    
  end
end
