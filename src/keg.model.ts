export class Keg {
  pints: number = 124;
  pintsToSell = 1;
  isOnSale = false;
  constructor(public name:string, public brand:string, public price:number, public abv:number, public style:string, public brandLocation:string) {}

  percentage() {
    if (this.style === "Sanitizer") { return 7 }
    else if (this.pints > 100) { return 6 }
    else if (this.pints > 75) { return 5 }
    else if (this.pints > 50) { return 4 }
    else if (this.pints > 25) { return 3 }
    else if (this.pints > 0) { return 2 }
    else if (this.pints === 0) { return 1 }
  }



  sellPint() {
    this.pints = this.pints - this.pintsToSell;
    if (this.pints < 0) {
      this.pints = 0;
    }
    console.log(this.pints)
  }

  toggleSale() {
    this.isOnSale = !this.isOnSale;
    if (this.isOnSale === true) { this.price -=1 }
    if (this.isOnSale === false) { this.price +=1 }
  }

  toggleSaleButton() {
    if (this.isOnSale === true) { return "++ Price" }
    else if (this.isOnSale === false) { return "--- Price" }
  }

  static getBlank() {
    return new Keg("", "", 0, 0, "", "");
  }
}
