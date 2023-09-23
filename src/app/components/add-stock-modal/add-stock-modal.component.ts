import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-stock-modal',
  templateUrl: './add-stock-modal.component.html',
  styleUrls: ['./add-stock-modal.component.scss'],
})
export class AddStockModalComponent implements OnInit {

  stockPicture!: File;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onCancel(): void {
    this.modalCtrl.dismiss(null, 'cancel');
  };

  onConfirm(): void {
    this.modalCtrl.dismiss(this.stockPicture, 'confirm');
  }

}
