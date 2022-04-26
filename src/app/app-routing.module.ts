import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppDashboardComponent
  },
  { path: 'recipe', 
    loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule) 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
