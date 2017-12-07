import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div *ngFor="let keg of childKegList; let i = index" class="keg">
      <div class="keg-info">
        <div class="keg-left">
          <p class="keg-name">{{keg.name}} <span class="keg-style">({{keg.style}})</span></p>
          <p class="keg-brand">{{keg.brand}} ({{keg.brandLocation}})</p>
          <div class="buttins">
            <button type="button" [class]="'btn ' + ((keg.pints > 25) ? 'btn-success' : (keg.pints > 0) ? 'btn-warning' : 'btn-danger')" name="button" (click)="keg.sellPint();" [disabled]="keg.pints === 0">Sell Pint</button>
            <select class="form-control dropdown" [(ngModel)]="keg.pintsToSell">
              <option value="1">16oz</option>
              <option value="2">32oz</option>
              <option value="4">64oz</option>
            </select>
          </div>
        </div>
        <div class="keg-middle">
          <div [ngSwitch]="keg.percentage()">
            <img *ngSwitchCase="1" src="resources/images/1.jpg" class="keg-fullness">
            <img *ngSwitchCase="2" src="resources/images/2.jpg" class="keg-fullness">
            <img *ngSwitchCase="3" src="resources/images/3.jpg" class="keg-fullness">
            <img *ngSwitchCase="4" src="resources/images/4.jpg" class="keg-fullness">
            <img *ngSwitchCase="5" src="resources/images/5.jpg" class="keg-fullness">
            <img *ngSwitchCase="6" src="resources/images/6.jpg" class="keg-fullness">
            <img *ngSwitchCase="7" src="resources/images/purell.jpg" class="keg-fullness purell">
          </div>
        </div>
        <div class="keg-right">
          <p [class]="keg.isOnSale ? 'keg-price-sale keg-price' : 'keg-price'">&#36;{{keg.price.toFixed(2)}}</p>
          <p *ngIf="keg.abv > 6.9" class="keg-size">12oz / {{keg.abv}}% ABV <img src="http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/skull-and-crossbones.png" class="skull"></p>
          <p *ngIf="keg.abv <= 6.9" class="keg-size">16oz / {{keg.abv}}% ABV</p>
        </div>
      </div>
      <div class="more-buttins">
        <button type="button" class="btn btn-info" (click)="keg.toggleSale()">{{keg.toggleSaleButton()}}</button><br>
        <button type="button" class="btn btn-warning edit" data-toggle="modal" data-target="#keg-modal" (click)="editWasClicked(keg)">Edit Kiig</button><br>
        <button type="button" class="btn btn-danger" (click)="removeKegWasClicked(i)">Remove</button><br>
        <button type="button" class="btn btn-success" (click)="keg.pints=124">Restock</button>
      </div>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg;
  @Output() editWasClickedSender = new EventEmitter();
  @Output() removeKegWasClickedSender = new EventEmitter();

  editWasClicked(keg) {
    this.editWasClickedSender.emit(keg);
  }

  percentage() {
  }

  toggleSaleButton() {
  }

  removeKegWasClicked(i) {
    this.removeKegWasClickedSender.emit(i)
  }
}
