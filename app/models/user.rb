class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :gamertag, presence: true, uniqueness: true, length: {minimum: 2}
    validates :bio, length: {maximum: 250}
    has_many :reviews
    has_many :games, through: :reviews
    has_many :favourite_games

end
