import { Component, OnInit } from '@angular/core';
import { WorkoutItem } from '../workout-item';

@Component ({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
})
export class WorkoutComponent implements OnInit {
  public workoutName: String;
  public workoutDate: String;
  public workoutItems: WorkoutItem[] = [];

  public newWorkoutItem() {
    this.workoutItems.push(new WorkoutItem());
  }

  public ngOnInit() {
    this.newWorkoutItem();
  }
}
