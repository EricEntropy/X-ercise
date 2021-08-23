class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title, :muscle_group
  has_many :exercise_sets
end
