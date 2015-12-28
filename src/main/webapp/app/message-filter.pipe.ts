import {Pipe} from 'angular2/core';
@Pipe({name: 'messageFilter'})
export class MessageFilterPipe {
  transform(value:string, args:string[]) : any {
    return value.toUpperCase();
  }
}