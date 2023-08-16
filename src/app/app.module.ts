import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { SvgMapComponent } from './svg-map/svg-map.component';

const appRoutes: Routes = [
  {path: '', component: WorldComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    SvgMapComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
