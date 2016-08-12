import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-form-details form-group">
    <h3>Edit Meal: </h3>
    <input [(ngModel)]="meal.name" class="col-sm-12 input-lg"/>
    <label for="mealOfDaySelect">Meal of the Day:</label>
    <select id="mealOfDaySelect" [(ngModel)]="meal.mealOfDay">
      <option selected value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
    </select>
    <input [(ngModel)]="meal.calories" class="col-sm-12 input-lg"/>
    <input [(ngModel)]="meal.notes" class="col-sm-12 input-lg"/>
    <button type="button">submit</button>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
