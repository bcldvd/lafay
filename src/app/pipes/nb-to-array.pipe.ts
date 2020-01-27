import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'nbToArray' })
export class NbToArrayPipe implements PipeTransform {
  transform(value: number): number[] {
    return Array(value)
      .fill(0)
      .map((x, i) => i + 1);
  }
}
