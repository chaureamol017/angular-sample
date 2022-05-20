import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringFormatter'
})
export class StringFormatterPipe implements PipeTransform {

  transform(message: string, ...args: any[]): string {
    if (args && args.length > 0) {
      args.forEach((value, index) => {
        message = message.replace(`{${index}}`, value)
      });
    }

    return message;
  }
}
