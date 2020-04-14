import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxGalleryModule} from 'ngx-gallery';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxEditorModule} from 'ngx-editor';
import {FileUploadModule} from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { AlertifyService } from './services/alertify.service';
import { RegisterComponent } from './register/register.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent,
      CityAddComponent,
      RegisterComponent,
      PhotoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgxGalleryModule,
      FormsModule,
      ReactiveFormsModule,
      NgxEditorModule,
      FileUploadModule
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
