class LaboratoriesController < ApplicationController
  def index
    @bios = Bio.all
  end
end
