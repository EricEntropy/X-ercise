# X-ercise
workout logger

Welcome to X-ercise! 

With this app you can keep track of your workouts! 

## Installation 

1. Open a terminal and clone the entire repo to any local folder
2. cd into the backend folder
3. Once in the backend folder, run bundle install to install all gems needed
4. run rails db:migrate to run migration files
5. run rails db:reset to start off the app with some seed data and create database

## Usage 

1. Open a new terminal 
2. cd into the frontend folder 
3. open the index.html file
  For Windows run: explorer.exe index.html
  For Mac and Chrome installed run: google-chrome index.html
  
Once the index.html file opens on the browser, by pressing "Create Workout", you will be able to create a new Workotut and assign it a muscle_group from the drop down menu.  
From there, you can filter workouts by muscle group. Under "Muscle Group Filter", find the muscle group you are looking for and click the "Check Workouts" Button. 
You will be shown all workouts associated with the selected muscle group. 
Then, a new Exercise form will rendered by clicking "New Set". You can then add the Exercise to that specific Workout.
By clicking the "X" button next to the Exercise name, the Exercise will be deteled from the Workout and database. 
By clicking the "delete" button, the selected Workout will be deleted from database plus its assosicated Exercises. 

