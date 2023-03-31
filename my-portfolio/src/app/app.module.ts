import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './home/header/header.component';
import { MySectionComponent } from './home/my-section/my-section.component';
import { MyServiceComponent } from './home/my-service/my-service.component';
import { MyWorkComponent } from './home/my-work/my-work.component';
import { MySkillsComponent } from './home/my-skills/my-skills.component';
import { FooterComponent } from './home/footer/footer.component';
import { BallCursorComponent } from './home/ball-cursor/ball-cursor.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MySectionComponent,
    MyServiceComponent,
    MyWorkComponent,
    MySkillsComponent,
    FooterComponent,
    BallCursorComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
