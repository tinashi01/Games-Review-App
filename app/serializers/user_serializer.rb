class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :bio, :gamertag, :admin, :games, :favourite_games
end
