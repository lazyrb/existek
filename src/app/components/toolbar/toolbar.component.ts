import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { SearchProductService } from 'src/app/services/searchProduct.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    public formService: FormService,
    public searchService: SearchProductService
  ) {}

  ngOnInit() {}
}
