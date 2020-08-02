class Recipe < ApplicationRecord
  include PgSearch::Model

  has_many :ingredients, dependent: :destroy

  pg_search_scope :search_by_ingredient,
    associated_against: {
      ingredients: [:raw_marmiton_entry],
    },
    using: {
      tsearch: { prefix: true }
    }
end