class MedicinesController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorize, only: [:create]

    def index
        medicines = Medicine.where(user_id: session[:user_id])
        render json: medicines
    end

    def show
        medicine = Medicine.find(params[:id])
        render json: medicine
    end 

    def create
        medicine = Medicine.create(medicine_params)
        if medicine.valid?
            render json: medicine, status: :created
        else 
            render json: { errors: medicine.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        medicine = Medicine.find_by(id: params[:id])
        medicine.destroy
        head :no_content
    end

    def update
        medicine = Medicine.find_by(id: params[:id])
        medicine.update(medicine_params)

        render json: medicine, status: :accepted
    end

    private

    def medicine_params
        params.permit(:id, :name, :memo, :dose, :taken, :maxdose, :volume, :user_id)
    end


end
