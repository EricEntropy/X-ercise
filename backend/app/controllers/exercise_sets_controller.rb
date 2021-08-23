class ExerciseSetsController < ApplicationController

    def index 
        exercise_sets = ExerciseSet.all
        render json: exercise_sets
    end 

    def show 
        exercise_set = ExerciseSet.find(params[:id])
        render json: exercise_set
    end 

    def create 
        exercise_set = ExerciseSet.create(exercise_params)
        if exercise_set.save
            render json: exercise_set
        else 
            render json: {error: "Could not create Set."}
        end 
    end 

    def destroy
        exercise_set = ExerciseSet.find(params[:id])
        exercise_set.destroy
        render json: {message: "Successfully deleted Set"}
    end 

    private 

    def exercise_params
        params.require(:exercise_set).permit(:id, :name, :weight, :reps, :sets,:workout_id)
    end 
end
