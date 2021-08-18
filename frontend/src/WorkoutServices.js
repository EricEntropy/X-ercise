class WorkoutSerivices{ 
    constructor(rootURL){
        this.rootURL = rootURL;
    }

    getWorkouts(){
        fetch(this.rootURL)
        .then(resp => resp.json())
        .then(workouts => {
            console.log(workouts)
            workouts.forEach(workout => {
                const newWorkout = new Workout(workout)
                newWorkout.renderWorkout();
            })
        });
    };
}