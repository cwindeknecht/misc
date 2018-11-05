# app/models/user.rb
class User < ApplicationRecord
  # encrypt password
  # this mechanism requires us to have a password_digest attribute
  has_secure_password

  # Model associations
  has_many :todos, foreign_key: :created_by
  # Validations
  validates_presence_of :name, :email, :password_digest
end
