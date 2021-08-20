class Workout < ApplicationRecord
    has_many :exercise_sets, dependent: :destroy
end
