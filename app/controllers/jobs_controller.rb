class JobsController < ApplicationController
  def index
    @bios = Bio.all
  end
end
