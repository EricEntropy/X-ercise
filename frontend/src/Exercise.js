class Exercise{ 
    constructor(id, name, weight, reps, muscle_group, workout_id){
        this.id = id;
        this.name = name;
        this.weight = weight; 
        this.reps = reps; 
        this.muscle_group = muscle_group;
        this.workout_id = workout_id;
    }

    renderExerciseName(){
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

    renderExerciseInfo(){
        const setData = document.createElement('div');
        setData.innerHTML = `
        <p>Weight: ${this.weight}</p>
        <p>Repetitions: ${this.reps}</p>
        <p>Muscle Group: ${this.muscle_group}</p>
        `;
        return setData;
    };

    renderNewExerciseForm(){
        const newForm = document.createElement('div');
        newForm.classList.add('edit-form');

        newForm.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <br>
        <label for="weight">Weight:</label>
        <input type="text" name="weight" id="weight"/>
        <br>
        <label for="reps">Reps:</label>
        <input type="text" name="reps" id="reps"/>
        <br>
        <label for="muscle_group">Muscle Groupp:</label>
        <input type="text" name="muscle_group" id="muscle_group"/>
        <p>
            <button type="submit">Create Set</button>
        </p>
        `;

        return newForm;
    };
}