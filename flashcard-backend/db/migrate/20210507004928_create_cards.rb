class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :front
      t.string :back
      t.belongs_to :deck, null: false, foreign_key: true

      t.timestamps
    end
  end
end
