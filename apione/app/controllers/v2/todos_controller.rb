# Dummy Controller to test version control
class V2::TodosController < ApplicationController
  def index
    json_response(message: 'This is version 2')
  end
end
