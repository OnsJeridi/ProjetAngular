import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';



import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { TestPipesComponent } from './test-pipes/test-pipes.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HeaderComponent } from './header/header.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { FooterComponent } from './footer/footer.component';
import { TodolistComponent } from './todolist/todolist.component';


@NgModule({
  declarations: [
    AppComponent,
    
   
    HomeComponent,
   

    TestComponent,

    TestPipesComponent,

    SubscribeComponent,

    HeaderComponent,

    SeConnecterComponent,

    FooterComponent,

    TodolistComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot
([
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'testpipes',
    component:TestPipesComponent
  },

  {
    path:'subscribe',
    component:SubscribeComponent
  },

  {
    path:'connect',
    component:SeConnecterComponent
  },

  {
    path:'todos',
    component:TodolistComponent
  },

 
 

])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})


export class AppModule { }
