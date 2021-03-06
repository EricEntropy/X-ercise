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
            render json: {error: "Could not create workout."}
        end 
    end 

    def show
        workout = Workout.find(params[:id])
        render json: workout
    end 

    def destroy
        workout = Workout.find(params[:id])
        workout.destroy
        render json: {message: "Successfully deleted workout"}
    end 

    private 

    def workout_params
        params.require(:workout).permit(:id, :title, :muscle_group)
    end 
end
