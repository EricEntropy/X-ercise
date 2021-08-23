class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps, :sets, :workout_id
end
