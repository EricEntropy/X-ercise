class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps, :sets, :muscle_group, :workout_id
end
