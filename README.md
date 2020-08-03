# Fridge Roulette
This application allows you to find recipes ideas based on what's remain in your fridge (or closet or whatever)

It's available on https://fridge-roulette.herokuapp.com/

## Pre-requisites
- Ruby 2.6.2 + bundle
- Yarn
- Node.js

## Build app
- Run Bundle to install dependencies `bundle install`
- Prepare database: `bin/rails db:migrate`
- Fill database with Marmiton extract data: `bin/rails import_recipes`
- `bin/rails s` and it's up and running!

## Run tests
- Backend tests: `bin/rspec`
- Frontend tests: `npm run test`