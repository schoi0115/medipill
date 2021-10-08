class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :age, :first_name, :total_dose, :last_name

  def total_dose
    self.object.medicines.sum(:dose)
  end



end
