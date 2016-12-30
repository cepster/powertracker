import { WorkoutItem } from '../workout-item';

export class Workout {
  constructor(public workoutName?: String, public workoutDate?: String, public workoutItems?: WorkoutItem[]) {
  }
}
