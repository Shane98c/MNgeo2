import { Component } from '@angular/core';
import { ViewController, App } from 'ionic-angular';
import { InfoPage } from '../pages/info/info';


@Component({
  template: `
    <ion-list>
      <ion-list-header>MNgeo</ion-list-header>
      <button ion-item (click)="openPage()">About the app</button>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, public app: App) {}

  openPage() {
    this.viewCtrl.dismiss().then(() => {
      this.app.getRootNav().push(InfoPage);
    });
  }
}
