class Game < ApplicationRecord
    belongs_to :user
    validates :name, presence: true
    validates :review, presence: true, inclusion: {in: ["Overwhelmingly Positive", "Very Positive", "Positive", "Mostly Positive", "Mixed", "Mostly Negative", "Negative", "Very Negative", "Overwhelmingly Negative"]}
end
