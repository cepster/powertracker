import { Component, Input } from '@angular/core';
import { WorkoutItem } from './workout-item';

@Component({
  selector: 'app-workout-item',
  templateUrl: './workout-item.component.html',
})
export class WorkoutItemComponent {

  @Input() public item: WorkoutItem;
}
