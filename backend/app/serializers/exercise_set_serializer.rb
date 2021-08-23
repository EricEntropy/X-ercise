class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps, :workout_id
end
