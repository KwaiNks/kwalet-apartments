class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :apt_type, :apt_number, :price, :status, :image
end
