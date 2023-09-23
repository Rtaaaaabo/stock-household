import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';

import { DataService } from '../services/data/data.service';
import { ModalController } from '@ionic/angular';
import { from, tap, map } from 'rxjs';
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


  async onOpenAddStockModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AddStockModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss()
    console.log(role);
    // .pipe(filter(((data: { file: File | null, result: 'cancel' | 'confirm' }) => result === 'confirm'))).subscribe((data: { file: File | null }) => console.log(data)));
  }
}
