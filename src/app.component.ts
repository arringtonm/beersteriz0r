import {Component} from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1>beersteriz0r 0.0.2 alpha</h1>
      </div>
      <keg-list (removeKegWasClickedSender)="removeKeg($event)" (editWasClickedSender)="editListener($event)" [childKegList]="kegList"></keg-list>
      <button type="button" class="btn btn-default" data-toggle="modal" data-target="#keg-modal" (click)="editStatus='Add'; resetKeg()">Add Keg</button>
    </div>

    <!-- Modal -->
    <div id="keg-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">{{editStatus}}</h4>
          </div>
          <form >
            <div class="modal-body">
              <div class="form-group">
                <label for="keg-name">Name:</label>
                <input class="form-control" id="keg-name" name="keg-name" type="text" [(ngModel)]="newKeg.name">
              </div>
              <div class="form-group">
                <label for="keg-brand">Brand:</label>
                <input class="form-control" id="keg-brand" name="keg-brand" type="text" [(ngModel)]="newKeg.brand">
              </div>
              <div class="form-group">
                <label for="keg-brand-location">Brand Location:</label>
                <input class="form-control" id="keg-brand-location" name="keg-brand-location" type="text" [(ngModel)]="newKeg.brandLocation">
              </div>
              <div class="form-group">
                <label for="keg-style">Style:</label>
                <input class="form-control" id="keg-style" name="keg-style" type="text" [(ngModel)]="newKeg.style">
              </div>
              <div class="form-group">
                <label for="keg-price">Price:</label>
                <input class="form-control" id="keg-price" name="keg-price" type="text" [(ngModel)]="newKeg.price">
              </div>
              <div class="form-group">
                <label for="keg-alcohol-content">Alcohol Content:</label>
                <input class="form-control" id="keg-alcohol-content" name="keg-alcohol-content" type="text" [(ngModel)]="newKeg.abv">
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-info" data-dismiss="modal" (click)="editKegList()">{{editStatus}}</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  editStatus: string = "None"; // "Edit" || "Add"
  newKeg: Keg = Keg.getBlank();
  kegList: Keg[] = [];
  constructor() {
    this.kegList[0] = new Keg('Urban Farmhouse Ale', 'The Commons Brewery', 5, 5.3, 'Saison', 'Portland, OR');
    this.kegList[1] = new Keg('Breakside IPA', 'Breakside Brewery', 5, 6.8, 'American IPA', 'Portland, OR');
    this.kegList[2] = new Keg('Crisp Apple Cider', 'Angry Orchard', 5, 5, 'Cider', 'Boston, MA');
    this.kegList[3] = new Keg('Refreshing Aloe', 'Purell', 5, 70, 'Sanitizer', 'Akron, OH');
  }

  editKegList() {
    if(this.editStatus === "Add") {
      this.newKeg.price = parseInt(this.newKeg.price.toString());
      this.newKeg.abv = parseInt(this.newKeg.abv.toString());
      this.kegList.push(this.newKeg);
    }
  }

  resetKeg() {
    this.newKeg = Keg.getBlank();
  }



  editListener(keg) {
    this.newKeg = keg;
    this.editStatus = "Edit";

  }

  removeKeg(index) {
    this.kegList.splice(index,1);
  }


}
