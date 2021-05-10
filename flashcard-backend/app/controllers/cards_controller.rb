class CardsController < ApplicationController
  def index
    render json: Card.all
  end

  def update
    card = Card.find_by_id(params[:id])
    card.update(card_params)
    render json: card
  end


  private 

  def card_params
    params.require(:card).permit(:front, :back)
  end
end
