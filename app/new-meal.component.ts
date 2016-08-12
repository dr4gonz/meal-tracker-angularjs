import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';
@Component({
  selector: 'new-meal',
  inputs: ['meal'],
  outputs: ['newMealSubmit'],
  template: `
  <div class='col-md-12'>
    <label>Add a Meal</label>
    <form class="form-group">
      <input class="form-control" placeholder="Meal Name" #newName required>
      <label for="mealOfDaySelect">Meal of the Day:</label>
      <select class="form-control" id="mealOfDaySelect" #newMealOfDay>
        <option selected value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <input class="form-control" placeholder="Calories" #newCalories required>
      <input class="form-control" placeholder="Meal Notes" #newNotes required>
      <button class="btn btn-success btn-small" (click)="submitForm(newName, newMealOfDay, newCalories, newNotes)">Add</button>
    </form>
  </div>
    `
})
export class NewMealComponent {
  public newMealSubmit: EventEmitter<string[]>;
  constructor(){
    this.newMealSubmit = new EventEmitter();
  }
  submitForm(name: HTMLInputElement, mealOfDay: HTMLInputElement, calories: HTMLInputElement, notes: HTMLInputElement) {
    this.newMealSubmit.emit([name.value, mealOfDay.value, calories.value, notes.value]);
    name.value = '';
    mealOfDay.value = '';
    calories.value = '';
    notes.value = '';
  }
}
