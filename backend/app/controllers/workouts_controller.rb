class WorkoutsController < ApplicationController

    def index 
        workouts = Workout.all
        render json: workouts
    end 

    def create 
        workout = Workout.create(workout_params)
        if workout.save
            render json: workout
        else 
            render json: {error: "Could not create Set."}
        end 
    end 

    def show
        workout = Workout.find(params[:id])
        render json: workout
    end 

    def destroy
        workout = Workout.find(params[:id])
        workout.destroy
        render json: {message: "Successfully deleted Set"}
    end 

    private 

    def workout_params
        params.require(:workout).permit(:id, :title)
    end 
end
