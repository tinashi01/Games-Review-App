class CreateFavouriteGames < ActiveRecord::Migration[6.1]
  def change
    create_table :favourite_games do |t|
      t.integer "user_id", null: false
      t.integer "game_id", null: false
      t.timestamps
    end
  end
end
