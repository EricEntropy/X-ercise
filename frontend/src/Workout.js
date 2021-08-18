class Workout{
    constructor(id, title, exercise_sets){
        this.id = id; 
        this.title = title; 
        this.exercise_sets = exercise_sets;
    }

    renderWorkout(){
        const workoutList = document.getElementById("workout-list");
        const workoutCard = document.createElement('div');
        workoutCard.classList.add('workout-card');

        const workoutInfo = this.renderWorkoutInfo();
        const sets = this.renderWorkoutSets();

        workoutCard.appendChild(workoutInfo);
        workoutCard.appendChild(sets);

        workoutList.appendChild(workoutCard);
    };

    renderWorkoutInfo(){
        const workoutData = document.createElement('div');
        workoutData.innerHTML = `
        <h1>${this.title}</h1>
        `;
        return workoutData;
    }

    renderWorkoutSets(){
        const workoutUl = document.createElement('ul');
        workoutUl.classList.add('exercises');

        this.exercise_sets.forEach(set => {
            const newSet = new Exercise(
                set.id, 
                set.name,
                set.weight, 
                set.reps,
                set.muscle_group,
                set.workout_id);
            const li = newSet.renderExercise();
            workoutUl.appendChild(li);
        });
        return workoutUl;
    }
}