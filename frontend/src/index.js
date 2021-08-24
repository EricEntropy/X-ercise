
const workoutAPI = new WorkoutServices("http://localhost:3000/workouts");
const exerciseAPI = new ExerciseServices("http://localhost:3000/exercise_sets");
const workoutForm = document.getElementById('workout-form');


document.addEventListener('DOMContentLoaded', () => {
    workoutAPI.getWorkouts();
    exerciseAPI.getExercises();
});

workoutForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    workoutAPI.postWorkout();
});

function renderSorting(workouts){
    const sortContainer = document.getElementById('sort');
    const list = document.createElement('select');

    workouts.forEach(workout => {
        const muscle_group = document.createElement('option');
        muscle_group.innerText = workout.muscle_group;
        list.append(muscle_group);
        return list
    });  

    sortContainer.append(list);
};



