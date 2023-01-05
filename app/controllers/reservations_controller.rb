class ReservationsController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :invalid_input

    def create
        reservation = Reservation.create!(reservation_params)
        render json: reservation, status: :created
    end

    def index
        user = User.find_by(id: session[:user_id])
        if user
            render json: user.reservations
        else
            render json: {message: "Not Logged in"}, status: :unauthorized
        end
    end

    private
    def reservation_params
        params.permit(
            :firstname, 
            :lastname, 
            :address,
            :date_of_birth,
            :sex,
            :tel_no, 
            :nationality,
            :id_number,
            :email,
            :occupation,
            :date_of_entry,
            :length_of_stay,
            :first_ref_name,
            :first_ref_number,
            :second_ref_name,
            :second_ref_number,
            :user_id,
            :apartment_id
        )
    end

    def invalid_input(invalid)
     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
