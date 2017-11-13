class Post < ApplicationRecord
    has_many :votes, dependent: :destroy
end
