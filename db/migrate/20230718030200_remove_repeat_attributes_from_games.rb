class RemoveRepeatAttributesFromGames < ActiveRecord::Migration[6.1]
  def change
    remove_column :games, :review
    remove_column :games, :rating
  end
end
