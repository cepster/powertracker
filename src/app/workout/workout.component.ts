import { Component, OnInit, Input } from '@angular/core';
import { WorkoutItem } from '../workout-item';
import { Workout } from './workout';

@Component ({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: [ './workout.component.css' ],
})
export class WorkoutComponent implements OnInit {
  @Input() public workout: Workout;

  public newWorkoutItem() {
    this.workout.workoutItems.push(new WorkoutItem());
  }

  public ngOnInit() {
    if (!this.workout) {
      this.workout = new Workout("", "", []);
    }
    if (!this.workout.workoutItems) {
      this.newWorkoutItem();
    }
  }

  public previousWorkout() {
    console.log('TODO: Emit event that previous workout was triggered');
  }

  public nextWorkout() {
    console.log('TODO: Emit event that next workout was triggered');
  }
}
