class RemoveGamertagFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :gamertag
  end
end
