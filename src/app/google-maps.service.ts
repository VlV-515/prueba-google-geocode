import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  constructor(private __loader: MapsAPILoader) {}

  geocodeAddress2(address: string) {
    return Observable.create((observer: any) => {
      try {
        this.__loader.load().then(() => {
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ address }, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              const place = results[0];
              observer.next(place);
              observer.complete();
            } else {
              console.error(
                'Error de geocodificación - ',
                status,
                ' ---> Se intentó buscar: ',
                address
              );
              if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
                observer.error('La dirección no pudo ser encontrada');
              } else {
                observer.error(status);
              }
              observer.complete();
            }
          });
        });
      } catch (error) {
        observer.error('error de geocodificacion: ' + error);
        observer.complete();
      }
    });
  }
}
