
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: any): string {
    const hours = parseInt(value / 1000 / 60 / 24);
    let remaining = value % (1000 * 60 * 24);
    const minutes = parseInt(remaining / 1000 / 60) ;
    remaining = remaining % (1000 * 60);
    const seconds = parseInt(remaining / 1000) ;
    remaining = remaining % (1000);
    const ms = remaining;
    return `${this._pad(minutes, 2)}:${this._pad(seconds, 2)}:${this._pad(ms, 3)}`;
  }
  
  private _pad(num, length) {
    let s = num + '';
    while (s.length < length) {
      s = '0' + s;
    }
    return s;
  }
}