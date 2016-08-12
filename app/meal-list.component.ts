import {Component} from 'angular2/core';
import {Meal} from './meal.model';
import {MealDisplayComponent} from './meal-display.component';
import {NewMealComponent} from './new-meal.component';
import {CaloriePipe} from './calorie.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  directives: [MealDisplayComponent, NewMealComponent],
  pipes: [CaloriePipe],
  template: `
  <select (change)="selectCalorieFilter($event.target.value)" >
    <option value="all">All</option>
    <option value="High-Calorie">High Calorie(> 500)</option>
    <option value="Low-Calorie">Low Calorie(< 500)</option>
  </select>

  <meal-display *ngFor="#currentMeal of meals | calories:filterCalories" [meal]="currentMeal" (click)="mealClicked(currentMeal)"></meal-display>
  <new-meal (newMealSubmit)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public meal: Meal;
  public meals: Meal[];
  public filterCalories: string = 'all';
  constructor(){
    this.meals = [
      new Meal('2 Eggs', 'Breakfast', "120", 'Fried in Butter'),
      new Meal('Turkey Sandwich', 'Lunch', "200", 'Mayo, Mustard, Lettuce, Cheese on Whole Wheat'),
      new Meal('Chicken and Vegetables', 'Dinner', "400", 'Side of white rice')
    ]
  }

  mealClicked(clickedMeal: Meal){
    console.log(clickedMeal);
  }
  createMeal(params) {
    this.meals.push(new Meal(params[0],params[1],params[2],params[3]));
    console.log(this.meals);
  }
  selectCalorieFilter(selection: string) {
    this.filterCalories = selection;
    console.log(selection);
  }
}
