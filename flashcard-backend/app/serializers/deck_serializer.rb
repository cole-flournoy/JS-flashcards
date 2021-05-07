class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :group
  has_many :cards
end
