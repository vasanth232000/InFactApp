import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryHeaderComponent } from './layouts/category-header/category-header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { CommentsFormComponent } from './comments/comments-form/comments-form.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { AboutComponent } from './pages/about/about.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryHeaderComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    SubscriptionFormComponent,
    CommentsFormComponent,
    CommentsListComponent,
    AboutComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
