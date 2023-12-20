class FavouriteGameSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :game

  # belongs_to :game
end
