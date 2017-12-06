import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'src/app.component.html'
})

export class AppComponent {
  editStatus: string = "None"; // "Edit" || "Add"
  newKeg: Keg = Keg.getBlank();
  kegs: Keg[] = [];
  constructor() {
    this.kegs[0] = new Keg('Urban Farmhouse Ale', 'The Commons Brewery', 5, 5.3, 'Saison', 'Portland, OR');
    this.kegs[1] = new Keg('Breakside IPA', 'Breakside Brewery', 5, 6.8, 'American IPA', 'Portland, OR');
    this.kegs[2] = new Keg('Crisp Apple Cider', 'Angry Orchard', 5, 5, 'Cider', 'Boston, MA');
    this.kegs[3] = new Keg('Refreshing Aloe', 'Purell', 5, 70, 'Sanitizer', 'Akron, OH');
  }

  editKegList() {
    if(this.editStatus === "Add") {
      this.newKeg.price = parseInt(this.newKeg.price.toString());
      this.newKeg.abv = parseInt(this.newKeg.abv.toString());
      this.kegs.push(this.newKeg);
    }
  }

  resetKeg() {
    this.newKeg = Keg.getBlank();
  }

  sellPint(keg) {
    keg.pints = keg.pints - keg.pintsToSell;
    if (keg.pints < 0) {
      keg.pints = 0;
    }
  }

  toggleSale(keg) {
    keg.isOnSale = !keg.isOnSale;
  }

  percentage(keg) {
    if (keg.style === "Sanitizer") { return 7 }
    else if (keg.pints > 100) { return 6 }
    else if (keg.pints > 75) { return 5 }
    else if (keg.pints > 50) { return 4 }
    else if (keg.pints > 25) { return 3 }
    else if (keg.pints > 0) { return 2 }
    else if (keg.pints === 0) { return 1 }
  }

}

export class Keg {
  pints: number = 124;
  pintsToSell = 1;
  isOnSale = false;
  constructor(public name:string, public brand:string, public price:number, public abv:number, public style:string, public brandLocation:string) {}

  static getBlank() {
    return new Keg("", "", 0, 0, "", "");
  }
}
