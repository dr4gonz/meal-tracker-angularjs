import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';
import {MealDisplayComponent} from './meal-display.component';
import {NewMealComponent} from './new-meal.component';
import {CaloriePipe} from './calorie.pipe';
import {EditMealDetailsComponent} from './edit-meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['meals'],
  outputs: ['onMealSelect'],
  directives: [MealDisplayComponent, NewMealComponent, EditMealDetailsComponent],
  pipes: [CaloriePipe],
  template: `
  <div class="container">
    <div class="row">
      <div class="form-group col-md-2">
        <label>Filter your Food!</label>
        <select class="form-control" (change)="selectCalorieFilter($event.target.value)" >
          <option value="all">All</option>
          <option value="High-Calorie">High Calorie(> 500)</option>
          <option value="Low-Calorie">Low Calorie(< 500)</option>
        </select>
      </div>
      <div class="col-md-4">
        <new-meal (newMealSubmit)="createMeal($event)"></new-meal>
      </div>
      <div class="col-md-4">
        <edit-meal-details *ngIf="selectedMeal"
        [meal]="selectedMeal"
        (onEditCompletion)="deselectMeal($event)">
        </edit-meal-details>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <meal-display *ngFor="#currentMeal of meals | calories:filterCalories"
          [meal]="currentMeal"
          [class.selected]="currentMeal === selectedMeal"
          (click)="mealClicked(currentMeal)">
          </meal-display>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">

      </div>
    </div>
    <div class="container">
      <div class="row">

      </div>
    </div>
  </div>
  `
})

export class MealListComponent {
  public meal: Meal;
  public meals: Meal[];
  public filterCalories: string = 'all';
  public selectedMeal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  constructor(){
    this.onMealSelect = new EventEmitter();
    this.meals = [
      new Meal('2 Eggs', 'Breakfast', "120", 'Fried in Butter'),
      new Meal('Turkey Sandwich', 'Lunch', "200", 'Mayo, Mustard, Lettuce, Cheese on Whole Wheat'),
      new Meal('Chicken and Vegetables', 'Dinner', "400", 'Side of white rice'),
      new Meal('2 Eggs', 'Breakfast', "120", 'Fried in Butter'),
      new Meal('Turkey Sandwich', 'Lunch', "200", 'Mayo, Mustard, Lettuce, Cheese on Whole Wheat')
    ]
  }

  mealClicked(clickedMeal: Meal): void{
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(params) {
    this.meals.push(new Meal(params[0],params[1],params[2],params[3]));
  }
  selectCalorieFilter(selection: string) {
    this.filterCalories = selection;
  }
  deselectMeal(editStatus) {
    if(editStatus) {
      this.selectedMeal = null;
    }
  }
}
