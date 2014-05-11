module Geolocation# < ActiveRecord::Base
  def self.search_location(location_string)
    @location = {query: {address: location_string,                   sensor: false}}
    response = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json", @location
      )
    JSON.parse(response.body)["results"][0]
  end
end
