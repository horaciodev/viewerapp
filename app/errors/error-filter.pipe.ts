import { Pipe, PipeTransform } from '@angular/core';

import { IErrorVM } from './errorVM';

@Pipe({
  name: 'errorFilter'
})
export class ErrorFilterPipe implements PipeTransform {
  transform(value: IErrorVM[], filterby: string): IErrorVM[] {
    filterby = filterby ? filterby.toLocaleLowerCase(): null;

    return  filterby ? value.filter((error: IErrorVM) =>
    error.appId.toLocaleLowerCase().indexOf(filterby)!=-1): value;
  }
}
