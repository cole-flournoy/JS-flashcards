class CardsController < ApplicationController
  def index
    render json: Card.all
  end

  def create
    card = Card.new(card_params)
    if card.save
      render json: card
    else 
      render json: {error: card.errors.full_messages}
    end
  end

  def update
    card = Card.find_by_id(params[:id])
    card.update(card_params)
    render json: card
  end


  private 

  def card_params
    params.require(:card).permit(:front, :back, :deck_id)
  end
end
