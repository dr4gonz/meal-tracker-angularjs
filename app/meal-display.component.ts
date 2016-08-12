import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="col-md-2 meal-display">
    <h4>{{meal.mealOfDay}}</h4>
    <h5>{{meal.name}}</h5>
    <h6>Notes: {{meal.notes}}</h6>
    <h6>Calories: {{meal.calories}}</h6>
  </div>
  `
})

export class MealDisplayComponent {
  public meal: Meal;

}
