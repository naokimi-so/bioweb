class InformationsController < ApplicationController
    def index
      @bios = Bio.all
    end
end
