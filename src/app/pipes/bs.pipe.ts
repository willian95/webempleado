import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bs'
})
export class BsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
