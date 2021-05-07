class CardSerializer < ActiveModel::Serializer
  attributes :id, :front, :back
  belongs_to :deck
end
