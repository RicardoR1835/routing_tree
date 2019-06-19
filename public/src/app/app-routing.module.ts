import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { DetailsComponent } from './details/details.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { AuthorComponent } from './author/author.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent, children: [
    {path: 'details/:id', component: DetailsComponent},
    {path: 'brand/:brand', component: BrandComponent},
    {path: 'category/:cat', component: CategoryComponent},
  ]},
  {path: 'reviews', component: ReviewsComponent, children: [
    {path: 'details/:id', component: DetailsComponent},
    {path: 'author/:id', component: AuthorComponent},
    {path: 'all/:id', component: AllComponent},
  ]},
  { path: '', pathMatch: 'full', redirectTo: '/' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
