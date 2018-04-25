import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from './../../recipe.model';
import { Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipie = new EventEmitter<void>();
  constructor() { }

  loadDescriprion(){
    this.selectedRecipie.emit();
  }

  ngOnInit() {
  }

}
