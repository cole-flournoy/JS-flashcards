class CardSerializer < ActiveModel::Serializer
  attributes :id, :front, :back, :deck_id
  belongs_to :deck
end
