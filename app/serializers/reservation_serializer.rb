class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :address, :date_of_birth, :sex, :tel_no, :nationality, :id_number, :email, :occupation, :date_of_entry, :length_of_stay, :first_ref_name, :first_ref_number, :second_ref_name, :second_ref_number, :user_id, :apartment_id
  
end
