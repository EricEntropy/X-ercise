class Workout{
    constructor(id, title, muscle_group, exercise_sets){
        this.id = id; 
        this.title = title; 
        this.muscle_group = muscle_group;
        this.exercise_sets = exercise_sets;
    }

    renderWorkout(){
        const workoutList = document.getElementById("workout-list");
        const workoutCard = document.createElement('div');

        workoutCard.classList.add('workout-card');
        workoutCard.id = this.title;

        const workoutInfo = this.renderWorkoutCard();
        const sets = this.renderWorkoutSets();

        workoutCard.appendChild(workoutInfo);
        workoutCard.appendChild(sets);
        workoutList.appendChild(workoutCard);
        this.renderButtonClick();
    };

    renderButtonClick(){
        const containerCard = document.getElementById(`${this.title}`);
        const buttons = containerCard.querySelectorAll('button')
        console.log(buttons);

        buttons.forEach(button => {
            if(button.id === 'delete-btn'){
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log(this, "DELETE clicked");
                    workoutAPI.deleteWorkout(this.id);
                    containerCard.remove();
                })
            } else if(button.id === 'create-btn'){
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log(this, "NEW SET clicked");
                    const newSet = new Exercise();
                    newSet.workout_id = this.id;
                    newSet.renderNewSet(newSet, containerCard);
                });
            }
        });
    };

    renderWorkoutCard(){
        const workoutData = document.createElement('div');
        const deleteButton = document.createElement('button'); 
        const newExerciseButton = document.createElement('button'); 

        deleteButton.id = 'delete-btn';
        deleteButton.type = 'button';
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'Delete';

        newExerciseButton.id = 'create-btn';
        newExerciseButton.type = 'button';
        newExerciseButton.classList.add('create-btn');
        newExerciseButton.innerText = 'New Set';
    
        workoutData.innerHTML = `
        <h1>${this.title}</h1>
        Muscle Group: 
        <u>${this.muscle_group}</u>
        <br>
        `;

        workoutData.append(newExerciseButton);
        workoutData.append(deleteButton);

        return workoutData;
    };

    renderWorkoutSets(){
        const workoutUl = document.createElement('div');
        workoutUl.classList.add('exercises');

        this.exercise_sets.forEach(set => {
            const newSet = new Exercise(
                set.id, 
                set.name,
                set.weight, 
                set.reps,
                set.sets,
                set.workout_id);
            const li = newSet.renderExerciseCard();
            const ul = newSet.renderExerciseInfo();
            li.appendChild(ul);
            workoutUl.appendChild(li);
        });
        return workoutUl;
    }
}