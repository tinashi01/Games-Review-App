class AddColumnsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :image, :string
    add_column :users, :bio, :string
    add_column :users, :gamertag, :string
  end
end
