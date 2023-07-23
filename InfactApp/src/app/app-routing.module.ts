import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'post',component:SinglePostComponent},
  {path:'category',component:SingleCategoryComponent},
  {path:'about',component:AboutComponent},
  {path:'terms',component:TermsAndConditionComponent},
  {path:'contact',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
