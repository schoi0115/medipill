class Medicine < ApplicationRecord
  has_many :pharmacies
  belongs_to :user

  validates_presence_of :name, :volume, :maxdose

end
