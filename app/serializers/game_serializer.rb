class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :review, :rating
end
