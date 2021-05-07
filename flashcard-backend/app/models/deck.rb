class Deck < ApplicationRecord
  belongs_to :group
  has_many :cards
end
