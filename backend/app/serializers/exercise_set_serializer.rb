class ExerciseSetSerializer < ActiveModel::Serializer
  attributes :id, :name, :weight, :reps, :muscle_group
end
