import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { DolphinService } from 'src/app/services/dolphin.service';

@Component({
  selector: 'app-belanja-modal',
  templateUrl: './belanja-modal.page.html',
  styleUrls: ['./belanja-modal.page.scss'],
})
export class BelanjaModalPage {
  peringkat_belanja: any;
  bln:any;
  bln_next:any;
  constructor(
    private modalController: ModalController,
    private router: Router,
    private dolphinService: DolphinService,
    private alertController: AlertController
  ) {
    this.onload();
  }

  onload() {
    this.dolphinService.peringkat_belanja().subscribe((data) => {
      if (data) {
        if (data.includes('Belum ada')) {
          this.peringkat_belanja = [];
        } else {
          const d_n = new Date();
          let month = d_n.getMonth();
          let month_next = month + 1;
          if (month == 1) {
            this.bln = 'Jan';
          }
          if (month == 2) {
            this.bln = 'Feb';
          }
          if (month == 3) {
            this.bln = 'Mar';
          }
          if (month == 4) {
            this.bln = 'Apr';
          }
          if (month == 5) {
            this.bln = 'Mei';
          }
          if (month == 6) {
            this.bln = 'Jun';
          }
          if (month == 7) {
            this.bln = 'Jul';
          }
          if (month == 8) {
            this.bln = 'Agu';
          }
          if (month == 9) {
            this.bln = 'Sep';
          }
          if (month == 10) {
            this.bln = 'Okt';
          }
          if (month == 11) {
            this.bln = 'Nov';
          }
          if (month == 12) {
            this.bln = 'Des';
          }

          if (month_next == 1) {
            this.bln_next = 'Jan';
          }
          if (month_next == 2) {
            this.bln_next = 'Feb';
          }
          if (month_next == 3) {
            this.bln_next = 'Mar';
          }
          if (month_next == 4) {
            this.bln_next = 'Apr';
          }
          if (month_next == 5) {
            this.bln_next = 'Mei';
          }
          if (month_next == 6) {
            this.bln_next = 'Jun';
          }
          if (month_next == 7) {
            this.bln_next = 'Jul';
          }
          if (month_next == 8) {
            this.bln_next = 'Agu';
          }
          if (month_next == 9) {
            this.bln_next = 'Sep';
          }
          if (month_next == 10) {
            this.bln_next = 'Okt';
          }
          if (month_next == 11) {
            this.bln_next = 'Nov';
          }
          if (month_next == 12) {
            this.bln_next = 'Des';
          } else if(month==12) {
            this.bln_next = 'Jan';
          }

        //  console.log('peringkat_belanja', month);
          this.peringkat_belanja = data;
        }
      }
    });
  }
  async closeModal() {
    const onClosedData: boolean = false;
    await this.modalController.dismiss(onClosedData);
  }

  detail(val) {
    let navigationExtras: NavigationExtras = { state: { item: val } };
    this.router.navigate(['detail-belanja'], navigationExtras);
    this.closeModal();
  }
}
