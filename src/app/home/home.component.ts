import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.service';
import { Workout } from '../workout';
import { WorkoutItem } from '../workout-item';

@Component({
  selector: 'app-home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public localState: any = { value: '' };
  public activeWorkout: Workout;
  public workouts: Workout[];
  public index: number;

  constructor(public appState: AppState) {

  }

  public ngOnInit() {
    let dummyWorkout = new Workout('Alpha', 'Legs', []);
    dummyWorkout.workoutItems.push(new WorkoutItem("Deadlift", "5x5", []));
    this.activeWorkout = dummyWorkout;
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
