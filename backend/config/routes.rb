Rails.application.routes.draw do
  resources :exercise_sets, except: [:update]
  resources :workouts, except: [:update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
