import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value:number,Param:number):number
  {
    let ino1:number = 7;
    let ino2:number = 3;

    return ino1*ino2;
  }

}
