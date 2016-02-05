class LinksController < ApplicationController
  def index
    @bios = Bio.all
  end
end
