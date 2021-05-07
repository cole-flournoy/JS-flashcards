class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :group, :cards
end
