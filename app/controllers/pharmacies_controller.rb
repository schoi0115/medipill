class PharmaciesController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create]
  
      def show
        pharmacy = Pharmacy.where(medicine_id: params[:id]).order("created_at DESC")
        render json: pharmacy
      end
  
      def create
          pharmacy = Pharmacy.create(pharmacy_params)
          if pharmacy.valid?
            render json: pharmacy, status: :created
          else
            render json: { errors: new_note.errors.full_messages }, status: :unprocessable_entity
          end
      end
  
      def destroy
        pharmacy = Pharmacy.find_by(id: params[:id])
        pharmacy.destroy
        head :no_content
      end
  
      private
      def pharmacy_params
        params.permit(:id, :note, :user_id, :medicine_id)
      end
end
