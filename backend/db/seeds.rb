# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
workout1 = Workout.create(title: "bestChest")
workout2 = Workout.create(title: "bestBack")

set_1 = ExerciseSet.create(
    name: "warm up chest", 
    weight: 100, 
    reps: 10, 
    muscle_group: "chest",
)

set_2 = ExerciseSet.create(
    name: "warm up back", 
    weight: 120, 
    reps: 10, 
    muscle_group: "back",
)

workout1.exercise_sets << set_1
workout2.exercise_sets << set_2


