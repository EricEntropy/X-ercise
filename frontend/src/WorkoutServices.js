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
                    workout.id,
                    workout.title,
                    workout.muscle_group,
                    workout.exercise_sets)
                newWorkout.renderWorkout();
            })
            renderSorting(workouts);
        });
    };

    postWorkout(){
        const workoutForm = document.getElementById('workout-form');
        const titleInput = document.getElementsByName('title')[0];
        const muscle_groupInput = document.getElementsByName('muscle_group')[0];

        const workout = {
            title: titleInput.value,
            muscle_group: muscle_groupInput.value
        };

        if(workout.title.length === 0 || 
            workout.muscle_group.length === 0 ) {
            window.alert("Can't Create Empty Workout");
            workoutForm.reset();
        } else {
            const configuration = {
                method: 'POST', 
                headers: {
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                },
                body: JSON.stringify(workout)
            };

            fetch(this.rootURL, configuration)
            .then(resp => resp.json())
            .then(workout => {
                workout = new Workout(
                    workout.id,
                    workout.title,
                    workout.muscle_group,
                    workout.exercise_sets)
                workout.renderWorkout();
                workoutForm.reset();
            });
        }
            console.log(workout);
    };

    deleteWorkout(id){
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