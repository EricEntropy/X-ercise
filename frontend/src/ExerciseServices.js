class ExerciseServices{ 
    constructor(rootURL){
        this.rootURL = rootURL;
    }

    getExercises(){
        fetch(this.rootURL)
        .then(resp => resp.json())
        .then(exercises => {
            console.log(exercises)
            exercises.forEach(exercise => {
                const newExercise = new Exercise(
                    exercise.id,
                    exercise.name,
                    exercise.weight, 
                    exercise.reps,
                    exercise.muscle_group,
                    exercise.workout_id)
                newExercise.renderExerciseName();
            })
        });
    }

    postSet(newSet){
        
    }

}