# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
workout1 = Workout.create(title: "Chest", muscle_group: "Chest")
workout2 = Workout.create(title: "Back", muscle_group: "Back")
workout3 = Workout.create(title: "Arms", muscle_group: "Arms")

set_1 = ExerciseSet.create(
    name: "warm up pecs", 
    weight: 100, 
    reps: 10, 
    sets: 5, 
    muscle_group: "Chest"
)

set_2 = ExerciseSet.create(
    name: "warm up lats", 
    weight: 120, 
    reps: 10, 
    sets: 5, 
    muscle_group: "Back"
)

set_3 = ExerciseSet.create(
    name: "warm up curls", 
    weight: 120, 
    reps: 10, 
    sets: 5, 
    muscle_group: "Arms"
)

workout1.exercise_sets << set_1
workout2.exercise_sets << set_2
workout3.exercise_sets << set_3



