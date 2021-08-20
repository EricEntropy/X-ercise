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

        const workoutInfo = this.renderWorkoutTitle();
        const sets = this.renderWorkoutSets();

        workoutCard.appendChild(workoutInfo);
        workoutCard.appendChild(sets);

        workoutList.appendChild(workoutCard);
    };

    renderWorkoutTitle(){
        const workoutData = document.createElement('div');
        const deleteButton = document.createElement('button'); 
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click', (e) =>{
            e.preventDefault();
            console.log(this, "clicked");
            workoutAPI.deleteWorkout(this.id);
            workoutData.remove();
        });

        workoutData.innerHTML = `
        <h1>${this.title}</h1>
        `;

        workoutData.appendChild(deleteButton);
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
            const li = newSet.renderExerciseName();
            const ul = newSet.renderExerciseInfo();
            workoutUl.appendChild(li);
            workoutUl.appendChild(ul);
        });
        return workoutUl;
    }
}