import {Pipe} from 'angular2/core';
import {PipeTransform} from 'angular2/core';

@Pipe({
    name: 'messageFilter',
    pure: false
})
export class MessageFilterPipe implements PipeTransform {
    
    filteredNotes = [];
    
    transform(heroes: any[], [text]) : any {
        this.filteredNotes.length = 0;
        if(text == null) {
            text = '';
        }
        if(heroes != null) {
            var tmp = heroes.filter(note => note.message.indexOf(text) !== -1);
            tmp.forEach(element => {
                this.filteredNotes.push(element);      
            });    
        }
        return this.filteredNotes;
    }
}