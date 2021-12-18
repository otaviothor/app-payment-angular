import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumber',
})
export class CardNumberPipe implements PipeTransform {
  transform(value: string | number, hideCharacters: boolean = false): string {
    value = value + '';

    if (hideCharacters) {
      let formattedValue = '';
      for (let key = 0; key < value.length; key++) {
        if (key < value.length - 4 && key > 3)
          formattedValue += '*';
        else formattedValue += value[key];
      }

      value = formattedValue
        .substring(0, 16)
        .replace(/[^0-9]/, '')
        .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    } else {
      value = value
        .toString()
        .substring(0, 16)
        .replace(/[^0-9]/, '')
        .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    }

    return value;
  }
}
