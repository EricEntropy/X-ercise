class Exercise{ 
    constructor(id, name, weight, reps, muscle_group, workout_id){
        this.id = id;
        this.name = name;
        this.weight = weight; 
        this.reps = reps; 
        this.muscle_group = muscle_group;
        this.workout_id = workout_id;
    }

    renderExercise(){
        const li = document.createElement('li');
        const deleteButton = document.createElement('button'); 

        li.innerText = this.name;

        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'X';

        deleteButton.addEventListener('click', () =>{
            console.log(this, "clicked");
        });

        li.appendChild(deleteButton);
        return li;
    };
}