class DecksController < ApplicationController
  def index 
    render json: Deck.all
  end 

  def create
    deck = Deck.new(deck_params)
    if deck.save
      render json: deck
    else
      render json: {error: deck.errors.full_messages}
    end
  end

  private

  def deck_params
    params.require(:deck).permit(:name, :group_id)
  end 
end
