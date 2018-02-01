import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'proyectoFilter'
})
export class ProyectoFilterPipe implements PipeTransform {

  transform(array: any[], query:string): any {
    if(query){
    return _.filter(array,row=>(row.name).toLowerCase().indexOf(query.toLocaleLowerCase())>-1);
  }
  return array;
 }
}
