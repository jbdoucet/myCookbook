import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
//import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Recipe } from './_models/recipe.model';
import { RecipeMockService } from './_mocks/recipe-mock.service';
import { MessageService } from '../_services/message.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'imagePath'];
  dataSource: MatTableDataSource<Recipe>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //@ViewChild(MatSort) sort!: MatSort;

  constructor(private recipeMockService: RecipeMockService, private messageService: MessageService) {
    //this.dataSource = new MatTableDataSource(this.getRecipes());
    this.dataSource = new MatTableDataSource(recipeMockService.getRecipes());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
}