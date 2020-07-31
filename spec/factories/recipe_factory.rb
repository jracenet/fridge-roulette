FactoryBot.define do
  factory :recipe do
    name do
      "#{FFaker::Food.meat} with #{FFaker::Food.vegetable}"
    end
  end
end
