class ChangeRatingToString < ActiveRecord::Migration[6.1]
  def change
    change_column :games, :rating, :string
  end
end
