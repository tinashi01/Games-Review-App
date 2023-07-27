class AddHeadingColumnToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :heading, :string
  end
end
