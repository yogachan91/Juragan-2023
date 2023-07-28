import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import {
  GoogleMap,
  MapInfoWindow,
  MapGeocoder,
  MapGeocoderResponse,
} from '@angular/google-maps';
import { ModalController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map-pengiriman',
  templateUrl: './map-pengiriman.page.html',
  styleUrls: ['./map-pengiriman.page.scss'],
})
export class MapPengirimanPage {
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  @ViewChild('myGoogleMap', { static: false })
  map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;

  address = '';
  latitude!: any;
  longitude!: any;
  zoom = 17;
  maxZoom = 15;
  minZoom = 8;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
  };
  markers = [] as any;
  lat :any;
  long:any;
  


  constructor(private ngZone: NgZone, private geoCoder: MapGeocoder,  private modalController: ModalController,  private router: Router) {
  }



  ngAfterViewInit(): void {
    // Binding autocomplete to search input control
    let autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement
    );
    // Align search box to center
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      this.searchElementRef.nativeElement
    );
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        console.log('map',place);

        //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

      //  console.log({ place }, place.geometry.location?.lat());
        this.address = place.formatted_address;


        //set latitude, longitude and zoom
        this.latitude = place.geometry.location?.lat();
        this.longitude = place.geometry.location?.lng();

        // Set marker position
        this.setMarkerPosition(this.latitude, this.longitude);

        this.center = {
          lat: this.latitude,
          lng: this.longitude,
        };
      });
    });
  }

  

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('posisi',position)

      this.getAddress(position.coords.latitude,position.coords.longitude);

      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // Set marker position
      this.setMarkerPosition(this.latitude, this.longitude);
    });
  }

  
  setMarkerPosition(latitude: any, longitude: any) {
    console.log('simpanmap1', latitude, longitude);
    this.lat = latitude;
    this.long = longitude;
    // Set marker position
    this.markers = [
      {
        position: {
          lat: latitude,
          lng: longitude,
        },
        options: {
          animation: google.maps.Animation.DROP,
          draggable: true,
        },
      },
    ];
  }

  eventHandler(event: any, name: string) {
     console.log('simpanmap2',event.latLng.lat(), event.latLng.lng());
     console.log('simpanmap3',name);
     this.lat = event.latLng.lat();
     this.long = event.latLng.lng();
    
    switch (name) {
      case 'mapDblclick': // Add marker on double click event
        break;

      case 'mapDragMarker':
        break;

      case 'mapDragend':
        this.getAddress(event.latLng.lat(), event.latLng.lng());
        break;

      default:
        this.getAddress(event.latLng.lat(), event.latLng.lng());
        break;
    }
  }

  getAddress(latitude: any, longitude: any) {
    this.geoCoder
      .geocode({ location: { lat: latitude, lng: longitude } })
      .subscribe((addr: MapGeocoderResponse) => {
         console.log('alamat',addr);
        if (addr.status === 'OK') {
          if (addr.results[0]) {
            this.zoom = 17;
            this.address = addr.results[2].formatted_address;
          } else {
            this.address = null;
            window.alert('No results found');
          }
        } else {
          this.address = null;
          window.alert('Geocoder failed due to: ' + addr.status);
        }
      });
  }

  async closeModal() {
    const datamap = {
        lokasi: this.address,
        lat : this.lat,
        long : this.long,
    };
    console.log('cekmap',datamap)
    this.modalController.dismiss(datamap);
  //  window.location.reload();
  // this.router.navigate(['profile'])
  }
  async ModalBatal(){
    this.modalController.dismiss();
  }



}
