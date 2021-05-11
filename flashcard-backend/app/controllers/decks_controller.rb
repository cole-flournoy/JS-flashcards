class DecksController < ApplicationController
  def index 
    render json: Deck.all
  end 

  def create
    deck = Deck.create(deck_params)
    render json: deck
  end

  private
   
  def deck_params
    params.require(:deck).permit(:name, :group_id)
  end 
end
