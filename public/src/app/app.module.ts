import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DetailsComponent } from './details/details.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    DetailsComponent,
    BrandComponent,
    CategoryComponent,
    AuthorComponent,
    AllComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }