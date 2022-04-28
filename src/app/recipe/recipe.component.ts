import { Component, OnInit } from '@angular/core';

import { Recipe } from './_models/recipe.model';
import { RecipeMockService } from './_mocks/recipe-mock.service';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  selectedRecipe?: Recipe;

  recipes: Recipe[] = [];

  constructor(private recipeMockService: RecipeMockService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
    this.messageService.add(`RecipeComponent: Selected recipe id=${recipe.id}`);
  }

  getRecipes(): void {
    this.recipeMockService.getRecipes()
        .subscribe(recipes => this.recipes = recipes);
  }
}
