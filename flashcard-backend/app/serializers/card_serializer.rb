class CardSerializer < ActiveModel::Serializer
  attributes :id, :front, :back, :deck
end
