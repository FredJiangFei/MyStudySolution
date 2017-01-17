import { Component,Input,OnChanges,SimpleChanges} from '@angular/core';

@Component({
    moduleId: module.id,
    template: '',
    selector: 'on-changes'
})

export class OnChangesComponent implements OnChanges{
    @Input() power: string;
    ngOnChanges(changes: SimpleChanges): void {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
}
