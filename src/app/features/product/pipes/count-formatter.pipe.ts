import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countFormatter',
})
export class CountFormatterPipe implements PipeTransform {
  transform(value: number): number | string {
    switch (true) {
      case value > 999 && value < 1000000:
        const remainder = value % 100;
        const result = ((value - remainder) / 1000).toFixed(1);
        return remainder === 0 ? `${result}k` : `${result}k+`;

      default:
        return value;
    }
  }
}
