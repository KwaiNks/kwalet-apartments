class ApartmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_input


    def index
        apartments = Apartment.all
        render json: apartments, status: :ok
    end

    def show
        apartment = Apartment.find(params[:id])
        render json: apartment, status: :ok
    end

    def create
        apartment = Apartment.create!(apartment_params)
        render json: apartment, status: :created
    end

    def update
        apartment = Apartment.find(params[:id])
        apartment.update!(params[:apartment])
        render json: apartment, status: :accepted
    end

    def destroy
        apartment = Apartment.find(params[:id])
        apartment.destroy
        head :no_content
    end

    private

    def apartment_params
        params.permit(:apt_type, :apt_number, :price, :status, :image)
    end

    def render_not_found_response
        render json: { error: "apartment not found" }, status: :not_found
    end

    def invalid_input(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
