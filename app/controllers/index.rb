get '/' do
  # Look in app/views/index.erb
  erb :index
end

#location is for testing, should do client side geolocation when complete
get '/location' do
  Geolocation.search_location(params["location"]).to_json
end