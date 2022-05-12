import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'criditCard'
})
export class CriditCardPipe implements PipeTransform {

  transform(value: string): unknown {

      return value.slice(0,4)+"-"+value.slice(4,8)+"-"+ value.slice(8,12)+"-"+ value.slice(12,14);


  }

}
