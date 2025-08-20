import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostsComponent } from './shared/components/posts/posts.component';
import { PostCardsComponent } from './shared/components/post-cards/post-cards.component';
import { PostDetailsComponent } from './shared/components/post-details/post-details.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './shared/approuting.module';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';
import { GetconfirmComponent } from './shared/components/getconfirm/getconfirm.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostCardsComponent,
    PostDetailsComponent,
    PostFormComponent,
    PageNotFoundComponent,
    BackBtnComponent,
    GetconfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
