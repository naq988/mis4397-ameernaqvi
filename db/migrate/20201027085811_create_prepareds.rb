class CreatePrepareds < ActiveRecord::Migration[5.0]
  def change
    create_table :prepareds do |t|
      t.string :image
      t.string :title
      t.string :description
      t.string :button

      t.timestamps
    end
  end
end
