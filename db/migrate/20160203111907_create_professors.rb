class CreateProfessors < ActiveRecord::Migration
  def change
    create_table :professors do |t|
      t.string :name      # 教授の名前
      t.integer :category # 教授：１　准教授：２　助教授：３

      t.timestamps null: false
    end
  end
end
