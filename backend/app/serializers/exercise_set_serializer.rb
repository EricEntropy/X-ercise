class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps, :muscle_group, :workout_id
end
