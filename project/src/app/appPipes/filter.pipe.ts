import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(input: any[], search: string): any[] {
    let output: any[] = [];
    console.log(search);

    for (let i = 0; i < input.length; i++) {
      if (input[i].name.toLowerCase().includes(search.toLowerCase())) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
