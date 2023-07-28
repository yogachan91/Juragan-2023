import { Component } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import  OneSignal from 'onesignal-cordova-plugin';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    
  ) {
    defineCustomElements(window);
    if(Capacitor.isNativePlatform()){
      this.OneSignalInit()
    }
  }

  OneSignalInit() {
  
    OneSignal.setAppId("c2d96903-a6e7-4db4-b54a-0ccfa88b813b");
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
  
    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });

    console.log('OneSignal-Init-Completed');
  }
  
}
