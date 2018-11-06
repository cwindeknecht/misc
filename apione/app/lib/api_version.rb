# app/lib/api_version.rb

# The ApiVersion class accepts a version and a default flag on initialization. 
# In accordance with Rails constraints, we implement an instance method matches?. 
# This method will be called with the request object upon initialization. 
# From the request object, we can access the Accept headers and check for the requested version 
# or if the instance is the default version. This process is called content negotiation.
#       Content Negotiation: possible to serve different versions (representations) of a resource at the same URI
class ApiVersion
  attr_reader :version, :default

  def initialize(version, default = false)
    @version = version
    @default = default
  end

  # check whether version is specified or is default
  def matches?(request)
    check_headers(request.headers) || default
  end

  private

  def check_headers(headers)
    # check version from Accept headers; expect custom media type `todos`
    accept = headers[:accept]
    accept && accept.include?("application/vnd.todos.#{version}+json")
  end
end
