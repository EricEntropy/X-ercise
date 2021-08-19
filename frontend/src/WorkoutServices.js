class WorkoutServices{ 
    constructor(rootURL){
        this.rootURL = rootURL;
    }

    getWorkouts(){
        fetch(this.rootURL)
        .then(resp => resp.json())
        .then(workouts => {
            console.log(workouts)
            workouts.forEach(workout => {
                const newWorkout = new Workout(
                    workout.id, workout.title, workout.exercise_sets)
                newWorkout.renderWorkout();
            })
        });
    };

    postWorkout(){
        const workoutForm = document.getElementById('workout-form');
        const titleInput = document.getElementById('workout-title');

        const workoutData = {
            title: titleInput.value
        }
        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify(workoutData)
        }

        fetch(this.rootURL, configuration)
        .then(resp => resp.json())
        .then(workout => {
            workout.renderWorkout();
            workoutForm.reset();
        })
    };
}