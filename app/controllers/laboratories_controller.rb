class LaboratoriesController < ApplicationController
  def index
    @professors = Professor.all
  end
end
