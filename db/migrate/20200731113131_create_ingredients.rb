class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :raw_marmiton_entry
      t.references :recipe, type: :integer, references: :recipe, index: true, foreign_key: {to_table: :recipes, on_delete: :cascade}
    end
  end
end
