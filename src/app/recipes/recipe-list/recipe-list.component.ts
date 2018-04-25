import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelect = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('A test recipe','This is simply a test',
    'http://chefjulieyoon.com/wp-content/uploads/2012/01/TortelliniMeatballs-20.jpg'),
    new Recipe('Second test recipe','This is simply another test',
    'http://chefjulieyoon.com/wp-content/uploads/2012/01/TortelliniMeatballs-20.jpg')
  ];
  constructor() { }

  callRecipeMain(recipe:Recipe){
    this.onRecipeSelect.emit(recipe);
  }
  ngOnInit() {
  }

}
