# config/routes.rb
# We've set the version constraint at the namespace level. Thus, this will be applied to all resources within it.
# We've also defined v1 as the default version; in cases where the version is not provided,
# the API will default to v1. In the event we were to add new versions,
# they would have to be defined above the default version since Rails will cycle through all
# routes from top to bottom searching for one that matches
Rails.application.routes.draw do
  # module the controllers without affecting the URI
  scope module: :v2, constraints: ApiVersion.new('v2') do
    resources :todos, only: :index
  end

  # namespace the controllers without affecting the URI
  # move the existing todos and todo-items resources into a v1 namespace
  scope module: :v1, constraints: ApiVersion.new('v1', true) do
    resources :todos do
      resources :items
    end
  end

  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'
end
