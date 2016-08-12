import {Component} from 'angular2/core';
import {MealListComponent} from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Food Tracker 3000</h1>
      <meal-list></meal-list>
    </div>
  `
})
export class AppComponent {

}
