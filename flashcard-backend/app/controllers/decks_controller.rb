class DecksController < ApplicationController
  def index 
    render json: Deck.all
  end 
end
