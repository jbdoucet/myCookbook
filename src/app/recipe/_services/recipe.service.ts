import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Recipe } from '../_models/recipe.model';
import { RECIPES } from '../_mocks/recipe.mock';
import { MessageService } from '../../_services/message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private messageService: MessageService) { }

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES);
    this.messageService.add('RecipeService: fetched recipes');
    return recipes;
  }
}
