import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addErn'
})
export class AddErnPipe implements PipeTransform {

  transform(value?: string): string {
    return value ? value +'ern' : '';
  }

}
