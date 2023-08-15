import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';

const appRoutes: Routes = [
  {path: '', component: WorldComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
