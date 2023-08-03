class Game < ApplicationRecord
    
    # has_many reviews through user
    has_many :reviews
    has_many :users, through: :reviews
    
    has_many :favourite_games
    validates :name, presence: true
    
end
