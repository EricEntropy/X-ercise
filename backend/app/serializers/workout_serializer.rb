class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :exercise_sets
end
