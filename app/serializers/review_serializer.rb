class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :heading, :comment, :rating, :user, :game, :created_at
end
