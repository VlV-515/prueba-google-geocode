import { Component } from '@angular/core';
import { GoogleMapsService } from './google-maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchTxt = '';
  results2: any;

  constructor(private googleMapsService: GoogleMapsService) {}

  ngOnInit() {}
  buscar(): void {
    this.googleMapsService
      .geocodeAddress2(this.searchTxt)
      .subscribe((results: any) => {
        console.log({ results });
        this.results2 = results;
      });
  }
}
