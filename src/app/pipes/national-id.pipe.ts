import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalID'
})
export class NationalIDPipe implements PipeTransform {
// 2-99-09-01-1509345
  transform(value: string, format:string): string {
    if(format=="YY")
    {
      return value.slice(1,3);
    }else if(format=="MM")
    {
      return value.slice(3,5);
    }else if(format=="DD")
    {
      return value.slice(5,7);

    }else if(format=="FullDate")
    {
      return value.slice(1,3)+"/"+value.slice(3,5)+"/"+ value.slice(5,7);

    }
    return "null";
  }


}
