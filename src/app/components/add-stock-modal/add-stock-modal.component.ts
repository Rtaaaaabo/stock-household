import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-stock-modal',
  templateUrl: './add-stock-modal.component.html',
  styleUrls: ['./add-stock-modal.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AddStockModalComponent implements OnInit {

  stockPicture!: File;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  onClickCancel(): void {
    this.modalCtrl.dismiss(null, 'cancel');
  };

  onClickConfirm(): void {
    this.modalCtrl.dismiss(this.stockPicture, 'confirm');
  }

}
