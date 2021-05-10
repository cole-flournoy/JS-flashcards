class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :group_id, :cards
  has_many :cards
  belongs_to :group
end
