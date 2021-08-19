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

        const workoutData = {
            
        }
        const configuration = {
            method: 'POST', 
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            },
            body: JSON.stringify()
        }
    }
}