class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :image_url
      t.string :review
      t.integer :rating
      t.integer :user_id

      t.timestamps
    end
  end
end
