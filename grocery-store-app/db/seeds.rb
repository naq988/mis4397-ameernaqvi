# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do |i|
    Department.create(store_id: Faker::Company.ein, name: Faker::Company.name, description: Faker::Company.bs, code: Faker::Company.duns_number)
end
 
5.times do |i|
    Employee.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, description: Faker::ChuckNorris.fact, role: Faker::Job.title, status: Faker::Job.employment_type, department_id: 4)
end

 
5.times do |i|
    Review.create(note: "great place", store_id: Faker::Company.ein)
end

5.times do|i|
    Store.create(name: Faker::FunnyName.name, description: Faker::Food.description, url: "#{Faker::FunnyName.name}.com", status: Faker::Boolean.boolean, code: Faker::Company.brazilian_company_number, address: Faker::Address.street_address, city: Faker::Address.city, state: Faker::Address.state_abbr, zip: Faker::Address.zip, country: "USA")
end


