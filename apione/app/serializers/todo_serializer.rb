# app/serializers/todo_serializer.rb
# We define a whitelist of attributes to be serialized and the model association (only defined attributes will be serialized).
# We've also defined a model association to the item model, this way the payload will include an array of items.
class TodoSerializer < ActiveModel::Serializer
  # attributes to be serialized  
  attributes :id, :title, :created_by, :created_at, :updated_at
  # model association
  has_many :items
end