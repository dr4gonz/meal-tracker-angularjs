import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';
@Component({
  selector: 'new-meal',
  inputs: ['meal'],
  outputs: ['newMealSubmit'],
  template: `
    <h4>Add a Meal</h4>
    <form>
      <input placeholder="Meal Name" #newName required>
      <label for="mealOfDaySelect">Meal of the Day:</label>
      <select id="mealOfDaySelect" #newMealOfDay>
        <option selected value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <input placeholder="Meal Notes" #newNotes required>
      <input placeholder="Calories" #newCalories required>
      <button (click)="submitForm(newName, newMealOfDay, newCalories, newNotes)">Add</button>
    </form>
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
