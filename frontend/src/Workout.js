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
        
        const workoutTitle = document.createElement('h1');
        workoutTitle.innerText = this.title;

        workoutCard.appendChild(workoutTitle);
        workoutList.appendChild(workoutCard);
    };

    renderWorkoutInfo(){
        const workoutData = document.createElement('div');
        workoutData.innerHTML = `
        <h1>${this.title}</h1>
        <p>Set: ${this.exercise_sets}</p>
        `;

        return workoutData;
    }
}