class Vote < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :post
end
