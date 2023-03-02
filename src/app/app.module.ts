import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InterpolationComponent } from './interpolation-binding/interpolation-binding.component'
import { OrdersModule } from './lazy-eager/eagerloading/orders.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CustomdirDirective } from './customdir.directive';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import {MatIconModule} from '@angular/material/icon';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    SidenavComponent,
    CustomdirDirective,
    DirectivesComponent,
    PipesComponent,
    CustompipePipe,
    LoginComponent,
    DashboardComponent,
    ChildComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrdersModule,
    MatSnackBarModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule ,
    OrderModule,
    FilterPipeModule,
    MatIconModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
