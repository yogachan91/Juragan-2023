import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
// import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';
import  OneSignal from 'onesignal-cordova-plugin';


const api_url: string = 'https://admin.ulidolphin.com/api/Dolphin5_2023/';
@Injectable({ 
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  public _token:string = '';
  public _id:string = '';
  appVersion: string = '506';
  appVersionnew: string = '612';
  //DUMMYAPPS SET isDEV TO false
  private isDEV = true;
  //.DUMMYAPPS
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.loadToken();
    this.loadOutletID();
  }

  ngOnInit() {
    
  }

  getAppVersion() {
    return this.appVersion.trim();
  }

  async loadToken() {
    const token = await Storage.get({ key: 'ULI_TOKEN'});
    if (token && token.value) {
      // console.log('set token: ', token.value);
      this._token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  async loadOutletID() {
    const token = await Storage.get({ key: 'OUTLET_ID'});
    if (token && token.value) {
      // console.log('set token: ', token.value);
      this._id = token.value;
    }
  }


  checkOutlet(imei, credentials): Observable<any>{
    
    let apiuri = 'login/'
    if(this.isDEV) {apiuri = 'loginsecret/'}

    return this.http.post(api_url+apiuri+imei, credentials).pipe(
      map((data: any) => {
        // console.log('AUTH _id', credentials);
        // console.log('AUTH imei', imei);
        // console.log('AUTH RETURN', data);
        if(data.status == 'success') {
          let retdata = data.retdata
          Storage.set({key: 'ULI_TOKEN', value: retdata.uli_token})
          Storage.set({key: 'USERDATA_STORAGE', value: JSON.stringify(retdata)})
          Storage.set({key: 'OUTLET_ID', value: retdata.outlet_id})
          this._id = retdata.outlet_id
          this._token = retdata.uli_token
          this.isAuthenticated.next(true);
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
        } else {
          this.isAuthenticated.next(false);
          throw Error(data.err);
        }
        
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  loginEmail(imei, credentials): Observable<any>{
    
    let apiuri = 'loginemail/'
    if(this.isDEV) {apiuri = 'loginemailsecret/'}

    return this.http.post(api_url+apiuri+imei, credentials).pipe(
      map((data: any) => {
        // console.log('AUTH _id', credentials);
        // console.log('AUTH imei', imei);
        // console.log('AUTH RETURN', data);
        if(data.status == 'success') {
          let retdata = data.retdata
          Storage.set({key: 'ULI_TOKEN', value: retdata.uli_token})
          Storage.set({key: 'USERDATA_STORAGE', value: JSON.stringify(retdata)})
          Storage.set({key: 'OUTLET_ID', value: retdata.outlet_id})
          this._id = retdata.outlet_id
          this._token = retdata.uli_token
          this.isAuthenticated.next(true);
          this.router.navigateByUrl('/tabs', { replaceUrl: true });
        } else {
          this.isAuthenticated.next(false);
          throw Error(data.err);
        }
        
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }
 
  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    Storage.remove({key: 'ULI_TOKEN'});
    Storage.remove({key: 'USERDATA_STORAGE'});
    Storage.remove({key: 'OUTLET_ID'});
    Storage.remove({key: 'SPLASH'});
    return Storage.clear();
  }

  getToken () {
    if(this._token) {
      if(Capacitor.isNativePlatform()){
        OneSignal.sendTag('uli_token', this._token.trim())
      }
    }
    return this._token.trim();
  }

  getID () {
    if(this._id) {
      if(Capacitor.isNativePlatform()){
        OneSignal.sendTag('outlet_id', this._id.trim())
        OneSignal.sendTag('current_app_version', this.appVersionnew.trim())
        OneSignal.addTrigger('current_app_version', 5003)
        OneSignal.setExternalUserId(this._id.trim())
        OneSignal.getTags((data) => {
          console.log('OneSignal-getTags', data);
        })
        OneSignal.getDeviceState((data)=>{
          console.log('OneSignal-DeviceState', data)
        })
      }
    }
    
    return this._id.trim();
  }
}
