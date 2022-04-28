import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';


import { ProductsService } from './services/products.service';
import { CategoriesListComponent } from './components/categoriesList/categoriesList.component';
import { MainComponent } from './components/main/main.component';
import { MaxWordsPipe } from './pipes/maxWords.pipe';
import { LoginComponent } from './components/login/login.component';
import { SearchByTitlePipe } from './pipes/searchByTitle.pipe';
import { FormService } from './services/form.service';
import { SearchProductService } from './services/searchProduct.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/signUp/signUp.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CategoriesListComponent,
    MainComponent,
    LoginComponent,
    MaxWordsPipe,
    SearchByTitlePipe,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule
    
  ],
  providers: [ProductsService, FormService, SearchProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
