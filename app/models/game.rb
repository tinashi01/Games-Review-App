class Game < ApplicationRecord
    
    # has_many reviews through user
    has_many :reviews
    has_many :users, through: :reviews
    

    validates :name, presence: true
    # front end
    # validates :review, presence: true, inclusion: {in: ["Overwhelmingly Positive", "Very Positive", "Positive", "Mostly Positive", "Mixed", "Mostly Negative", "Negative", "Very Negative", "Overwhelmingly Negative"]}
end
