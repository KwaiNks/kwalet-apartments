class User < ApplicationRecord
    has_secure_password

    has_many :reservations
    has_many :apartments, through: :reservations

    # validates :username, presence: true
    # validates :username, uniqueness: true
    # validates :username, length: { minimum: 4 }
end
