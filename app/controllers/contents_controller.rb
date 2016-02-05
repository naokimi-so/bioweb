class ContentsController < ApplicationController
    def index
      @bios = Bio.all
    end
end
