import { Component } from '@angular/core';
import { DolphinService } from '../services/dolphin.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  infowa:any;
  outlet_id:any;
  store_name:any;
  constructor(
    private authService: AuthenticationService, 
      private dolphinService: DolphinService, 
  ) {
    const outlet_id = this.authService.getID();

    this.dolphinService.whatsappinfo(this.store_name,outlet_id).subscribe(data => {
      console.log('infowa1',data.info2)
    this.infowa = data.info2;
  });
    
  }

  

}
