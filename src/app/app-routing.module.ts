import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  { path: 'recipes', 
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) 
  },
  {
    path: '',
    component: AppDashboardComponent
    //redirectTo: '',
    //pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
