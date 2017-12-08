import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "alphabeticalness",
  pure: false
})

export class AlphaPipe implements PipeTransform {
  transform(input: Keg[], sortType) {
    console.log(sortType);
    if (sortType === "alphabeticalness") {
      input.sort(function(a: Keg, b: Keg) {
        if(a.name > b.name) {return 1;}
        if(a.name < b.name) {return -1;}
        return 0;
      });
      return input;
    }
  }
}
