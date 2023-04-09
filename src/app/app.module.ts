import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { EncuentraElTesoroComponent } from './pages/encuentra-el-tesoro/encuentra-el-tesoro.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { QuienComponent } from './pages/quien/quien.component';
import { PlanetasComponent } from './pages/atrapame/planetas.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    EncuentraElTesoroComponent,
    HeaderComponent,
    FooterComponent,
    QuienComponent,
    PlanetasComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
