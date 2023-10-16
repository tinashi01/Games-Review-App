class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :favourite_games
end
