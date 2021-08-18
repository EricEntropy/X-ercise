class WorkoutsController < ApplicationController

    def index 
        workouts = Workout.all
        render json: workouts
    end 

    def show
        workout = Workout.find(params[:id])
        render json: workout
    end 


end
