require 'sinatra'
require 'active_record'
require 'yaml'
require_relative 'model/trainee'
require 'sinatra/cross_origin'

register Sinatra::CrossOrigin

configure do
  enable :cross_origin
end

ActiveRecord::Base.establish_connection(ENV['DATABASE_URL'])

before do
  content_type :json
end

after do
  ActiveRecord::Base.connection.close
end

# POST /api/ - create, read request body as JSON
post '/api/trainee' do
  trainee = Trainee.create(
    currentform: params['currentform'],
    finalform: params['finalform'],
    trainnumber: params['trainnumber']
  )

  status 201
  trainee.to_json
end

# GET /api/ - return individual/all as JSON
get '/api/trainee' do
  currentform = params['currentform']
  finalform = params['finalform']
  trainnumber = params['trainnumber']

  if !currentform.nil?
    trainee = Trainee.where(currentform: currentform)
  elsif !finalform.nil?
    trainee = Trainee.where(finalform: finalform)
  elsif !trainnumber.nil?
    trainee = Trainee.where(trainnumber: trainnumber)
  else
    trainee = Trainee.all.order(trainnumber: :ASC)
  end

  trainee.to_json
end

# PUT /api/ - update & read request body as JSON
put '/api/trainee/:id' do |id|
  currentform = params['currentform']
  finalform = params['finalform']
  trainnumber = params['trainnumber']

  trainee = Trainee.find_by_id(id)

  trainee.update(currentform: currentform) unless currentform.nil?
  trainee.update(finalform: finalform) unless finalform.nil?
  trainee.update(trainnumber: trainnumber) unless trainnumber.nil?

  status 200
  trainee.to_json
end

# DELETE /api/ - delete & return success/failure status code
delete '/api/trainee/' do
  currentform = params['currentform']
  finalform = params['finalform']
  trainnumber = params['trainnumber']
  trainee = Trainee.find_by(currentform: currentform, finalform: finalform, trainnumber: trainnumber)
  trainee.destroy
end
