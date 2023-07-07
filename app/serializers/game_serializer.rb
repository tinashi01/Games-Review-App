class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :review, :rating, :user_id
end
