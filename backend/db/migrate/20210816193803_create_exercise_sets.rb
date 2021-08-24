class CreateExerciseSets < ActiveRecord::Migration[6.1]
  def change
    create_table :exercise_sets do |t|
      t.string :name
      t.integer :weight
      t.integer :reps
      t.integer :sets
      t.string :muscle_group

      t.belongs_to :workout, foreign_key: true
      t.timestamps
    end
  end
end
