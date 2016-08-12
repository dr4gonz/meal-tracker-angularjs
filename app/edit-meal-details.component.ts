import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  outputs: ['onEditCompletion'],
  template: `
  <div class="col-md-12 meal-form-details">
    <label>Edit Meal: </label>
    <form class="form-group">
      <input [(ngModel)]="meal.name" class="form-control col-sm-12 input-sm"/>
      <label for="mealOfDaySelect">Meal of the Day:</label>
      <select class="form-control" id="mealOfDaySelect" [(ngModel)]="meal.mealOfDay">
        <option selected value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <input [(ngModel)]="meal.calories" class="form-control col-sm-12 input-sm"/>
      <input [(ngModel)]="meal.notes" class="form-control col-sm-12 input-sm"/>
      <button class="btn btn-primary" type="button" (click)="onSubmit(true)">Submit</button>
    </form>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public editComplete: boolean = false;
  public onEditCompletion: EventEmitter<boolean>;
  constructor(){
    this.onEditCompletion = new EventEmitter();
  }
  onSubmit(boolean) {
    this.onEditCompletion.emit(true);
  }
}
