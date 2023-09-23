import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';

import { DataService } from '../services/data/data.service';
import { ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { AddStockModalComponent } from '../components/add-stock-modal/add-stock-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  private data = inject(DataService);
  constructor(private modalCtrl: ModalController) { }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }


  onOpenAddStockModal(): void {
    const modal = from(this.modalCtrl.create({
      component: AddStockModalComponent,
    }));
    modal.subscribe((modalEl: HTMLIonModalElement) => modalEl.present())
  }
}
