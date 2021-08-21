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
        const p = document.createElement('p');
        const deleteButton = document.createElement('button'); 

        p.innerText = this.name;

        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'X';

        deleteButton.addEventListener('click', () =>{
            console.log(this, "clicked");
        });

        p.appendChild(deleteButton);
        return p;
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
        <style>
        label {
            width: 120px;
            display: inline-block;
            text-align: right;
        }
        </style>
        New Set
        <br>
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <br>
        <label for="weight">Weight:</label>
        <input type="text" name="weight" id="weight"/>
        <br>
        <label for="reps">Reps:</label>
        <input type="text" name="reps" id="reps"/>
        <br>
        <label for="muscle_group">Muscle Group:</label>
        <input type="text" name="muscle_group" id="muscle_group"/>
        <p>
            <button type="submit">Create Set</button>
        </p>
       
        `;

        return newForm;
    };
}