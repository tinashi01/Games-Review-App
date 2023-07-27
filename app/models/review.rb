class Review < ApplicationRecord
    belongs_to :user
    belongs_to :game
    validates :comment, presence: true, length: { maximum: 500}
    validates :rating, presence: true
end
