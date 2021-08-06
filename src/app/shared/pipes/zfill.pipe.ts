import {Pipe, PipeTransform} from '@angular/core';
import {Helpers} from '../helpers';

@Pipe({
  name: 'zfill'
})
export class ZfillPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Helpers.zfill(value);
  }

}
