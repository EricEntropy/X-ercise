
const workoutAPI = new WorkoutServices("http://localhost:3000/workouts");
const exerciseAPI = new ExerciseServices("http://localhost:3000/exercises");


document.addEventListener('DOMContentLoaded', () => {
    workoutAPI.getWorkouts();
});

