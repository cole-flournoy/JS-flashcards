class Group < ApplicationRecord
  has_many :decks
  validates :name, presence: true
end
