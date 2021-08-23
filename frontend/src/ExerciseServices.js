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
                    exercise.sets,
                    exercise.workout_id)
                newExercise.renderExerciseCard();
            })
        });
    }

    postSet(newSet){
        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(newSet)
        };

        fetch(this.rootURL, configuration)
        .then(resp => resp.json())
        .then(exercise => {
            newSet.id = exercise.id;
        });
    }

    deleteSet(id){
        const configuration = {
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            }
        };
        fetch(`${this.rootURL}/${id}`, configuration);
    }

}