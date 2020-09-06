import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  
  transform(value: number, Param: number): number
{
  let no1 : number = 8;
  let no2 : number = 3 ;

  return no1+no2;
}

}
