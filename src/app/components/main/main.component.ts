import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { SearchProductService } from 'src/app/services/searchProduct.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  products!: Observable<Product[]>;
  param = new BehaviorSubject('')
  p = 1;
  count = 5;

  constructor(private productService: ProductsService, public searchService: SearchProductService,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.param.next(params['category']);
    });
    this.products = combineLatest([this.productService.products, this.param]).pipe(
      map(([products, param]: any) => {
        if (param === undefined) {
          return products;
        } else if (param === 'electronics'){
          const category = products.filter((product: any) => product.category === param);
          return category;
        } else if (param === 'jewelery'){
          const category = products.filter((product: any) => product.category === param);
          return category;
        } else if (param === 'men\'s clothing'){
          const category = products.filter((product: any) => product.category === param);
          return category;
        } else if (param === 'women\'s clothing'){
          const category = products.filter((product: any) => product.category === param);
          return category;
        }
      })
    );
  }
}
