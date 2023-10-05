import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterToCentimeter'
})
export class MeterToCentimeterPipe implements PipeTransform {
  transform(value: number): number {
    return value * 100; // Convert meters to centimeters
  }
}
