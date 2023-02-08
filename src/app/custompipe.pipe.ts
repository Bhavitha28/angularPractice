import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string, gender:string): string {
    if(gender=='male'){
      return'mr' +value;
    }
    else{
      return 'mrs' +value;
    }
  }

}
