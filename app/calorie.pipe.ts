import {Pipe,PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: 'calories',
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args){
    var selectedFilter = args[0];
    var filteredMeals: Meal[] = [];
    if(selectedFilter === 'all') {
      return input;
    } else if (selectedFilter === "High-Calorie"){
      input.forEach((meal) => {
        if (parseInt(meal.calories) >= 500){
          filteredMeals.push(meal);
        }
      })
    } else if (selectedFilter === "Low-Calorie") {
      input.forEach((meal) => {
        if (parseInt(meal.calories) < 500){
          filteredMeals.push(meal);
        }
      })
    }
    return filteredMeals;

  }
}
