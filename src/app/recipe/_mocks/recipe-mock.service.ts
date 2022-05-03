import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Recipe } from '../_models/recipe.model';
import { RECIPES } from './recipes';
import { MessageService } from '../../_services/message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeMockService {

  //recipes: typeof RECIPES;
  recipes = RECIPES;

  constructor(private messageService: MessageService) { 
    //this.recipes = RECIPES;
  }

  //getRecipes(): Observable<Recipe[]> {
  //  const recipes = of(RECIPES);
  //  this.messageService.add('RecipeMockService: fetched recipes');
  //  return recipes;
  //}

  getRecipes(){
    this.messageService.add('RecipeMockService: fetched recipes');
    return this.recipes;
  }
}