class Exercise{ 
    constructor(id, name, weight, reps, sets, workout_id){
        this.id = id;
        this.name = name;
        this.weight = weight; 
        this.reps = reps; 
        this.sets = sets; 
        this.muscle_group = muscle_group;
        this.workout_id = workout_id;
    }

    renderExerciseCard(){
        const exerciseCard = document.createElement('div');
        const p = document.createElement('p');
        const deleteButton = document.createElement('button'); 

        exerciseCard.classList.add('exercise-card');

        p.innerText = this.name;

        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'X';

        deleteButton.addEventListener('click', () =>{
            console.log(this, "clicked");
            exerciseAPI.deleteSet(this.id);
            exerciseCard.remove();
        });

        p.appendChild(deleteButton);
        exerciseCard.appendChild(p);
        return exerciseCard;
    };

    renderExerciseInfo(){
        const setData = document.createElement('div');
        setData.classList.add('exercise-info')
        setData.innerHTML = `
        <p>Weight: ${this.weight}</p>
        <p>Repetitions: ${this.reps}</p>
        <p>Target # Sets: ${this.sets}</p>
        `;
        return setData;
    };

    renderNewExerciseForm(){
        const newForm = document.createElement('div');
        newForm.classList.add('edit-form');

        newForm.innerHTML = `
        <style>
        label {
            width: 150px;
            display: inline-block;
            text-align: right;}
        </style>
        <b>New Set</b>
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
        <label for="sets">Target # Sets:</label>
        <input type="text" name="sets" id="sets"/>
        <p>
            <button type="submit" id="create-set">Create Set</button>
            <button type="submit" id="cancel">Cancel</button>
        </p>
        `;
        return newForm;
    };

    renderNewSet(newSet, containerCard){
        const newForm = newSet.renderNewExerciseForm();
        const createBtn = newForm.querySelector('#create-set');
        const cancelBtn = newForm.querySelector('#cancel');

        containerCard.append(newForm);
        createBtn.addEventListener('click', (e) => {
            console.log(this, "CREATE SET clicked");
            const toRender = this.populateSetfromInput(newSet, containerCard, newForm);
            if (toRender === false){
                console.log(newSet);
                exerciseAPI.postSet(newSet);
                newForm.remove();
                const li = newSet.renderExerciseCard();
                const ul = newSet.renderExerciseInfo();
                li.appendChild(ul);
                containerCard.appendChild(li);
            }
        });

        cancelBtn.addEventListener('click', (e) => {
            console.log(this, "CANCEL clicked");
            newForm.remove();
        });
    }

    populateSetfromInput(newSet, containerCard, newForm){
        const nameInput = containerCard.querySelector('#name');
        const weightInput = containerCard.querySelector('#weight');
        const repsInput = containerCard.querySelector('#reps');
        const setsInput = containerCard.querySelector('#sets');

        let badInput = new Boolean(true);

        if(nameInput.value.length === 0){
            window.alert("Can't Create Empty Set");
            newForm.remove();
            return badInput;
        } else{
            newSet.name = nameInput.value;
            newSet.weight = weightInput.value;
            newSet.reps = repsInput.value;
            newSet.sets = setsInput.value;
            badInput = false;
            return badInput;
        }
    }
}