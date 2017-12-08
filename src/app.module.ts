import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list.component';
import { AlphaPipe } from './keg-sort.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, KegListComponent, AlphaPipe],
  bootstrap: [AppComponent]
})

export class AppModule {}
