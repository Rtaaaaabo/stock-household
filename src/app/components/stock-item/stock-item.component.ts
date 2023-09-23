import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  standalone: true,
  styleUrls: ['./stock-item.component.scss'],
  imports: [CommonModule, IonicModule, RouterLink],
})
export class StockItemComponent implements OnInit {
  private platform = inject(Platform);

  constructor() { }

  ngOnInit() { }
  isIos() {
    return this.platform.is('ios')
  }

}
