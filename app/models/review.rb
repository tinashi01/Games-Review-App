class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    validates :heading, presence: true
    validates :comment, presence: true, length: { maximum: 500}
    validates :rating, presence: true, numericality: {only_integer: true}
end
