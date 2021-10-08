class MedicineSerializer < ActiveModel::Serializer
  attributes :id, :name, :volume, :memo, :dose,  :taken, :maxdose, :user_id, :current_volume, :down_volume
  has_one :user


  def current_volume
    self.object.volume
  end

  def down_volume
    self.object.volume - self.object.maxdose
  end


end
