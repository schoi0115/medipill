class User < ApplicationRecord
    has_secure_password
    has_many :medicines
    has_many :pharmacies

    validates :username, uniqueness: true
   
    validates_presence_of :username, :password, :age, :first_name, :last_name
    validates_numericality_of :age, greater_than: 0
end
