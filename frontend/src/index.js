
const workoutAPI = new WorkoutSerivices("http://localhost:3000/workouts");

document.addEventListener('DOMContentLoaded', () => {
    workoutAPI.getWorkouts();
});

