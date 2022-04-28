import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categoriesList.component.html',
  styleUrls: ['./categoriesList.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  categories: string[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
