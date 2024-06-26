import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split(' ')
    let result: string = '';

    for(let v of values){
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(value: string){
    return value.substring(0, 1).toLocaleUpperCase() + value.substring(1).toLocaleLowerCase();
  }

}
