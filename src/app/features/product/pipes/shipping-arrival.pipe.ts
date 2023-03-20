import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shippingArrival',
})
export class ShippingArrivalPipe implements PipeTransform {
  private readonly months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  transform(daysToArrive: number): string {
    if (!daysToArrive) return '-';
    const today = new Date();

    return `${today.getDate()} - ${today.getDate() + daysToArrive} ${
      this.months[today.getMonth()]
    } ${today.getFullYear()}`;
  }
}
