import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule,HttpClient} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {QuillModule} from 'ngx-quill';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import {ModalModule} from 'ngx-bootstrap/modal';

import {DropzoneModule} from 'ngx-dropzone-wrapper';
import {FileDropModule} from 'ngx-file-drop';
import {CarouselModule} from 'ngx-bootstrap';

import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

import {routesComponents,Routing} from "./componentes-admin.module";
import {routesFrontComponents,RoutingFront} from './componentes-front.module';
import {serviceComponents} from './export-services';

import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import {MnFullpageModule} from 'ngx-fullpage';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgSelectizeModule} from "ng-selectize";

import {SortablejsModule} from 'angular-sortablejs';

import {NguCarouselModule} from '@ngu/carousel';
import {SlideshowModule} from 'ng-simple-slideshow';

import {BarRatingModule} from 'ngx-bar-rating';
import {ScrollEventModule} from 'ngx-scroll-event';

import {TabsModule} from 'ngx-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {precioMultiCarritoPipe} from './pipes/precioCarrito';

const domain:string="http://localhost:8000";
 

@NgModule({
  declarations: [
    AppComponent,
    routesComponents,
    routesFrontComponents,
    precioMultiCarritoPipe
  ],
  imports: [
    BrowserModule,
    Routing,
    RoutingFront,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    DropzoneModule,
    FileDropModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ParticlesModule,
    MnFullpageModule.forRoot(),
    BrowserAnimationsModule,
    NgSelectizeModule,
    SortablejsModule.forRoot({animation:150}),
    NguCarouselModule,
    SlideshowModule,
    BarRatingModule,
    ScrollEventModule,
    TabsModule.forRoot()
   
  ],
  providers: [serviceComponents,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
