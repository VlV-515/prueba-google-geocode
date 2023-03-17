import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // @agm/core
      apiKey: 'AIzaSyBtnuGIyaMKNzKmlZWeaNaE0Lq-73fM-j4',
      libraries: ['places', 'drawing'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
