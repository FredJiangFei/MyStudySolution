import { Component, DoCheck} from '@angular/core';

@Component({
    moduleId: module.id,
    template: '',
    selector: 'do-check'
})

export class DoCheckComponent  implements DoCheck{
    private changeDetected;
    private oldPersonName;
    private person;
    private oldPower;
    private power;
    private noChangeCount;

    ngDoCheck() {

        if (this.person.name !== this.oldPersonName) {
            this.changeDetected = true;
            console.log(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldPersonName}"`);
            this.oldPersonName = this.person.name;
        }

        if (this.power !== this.oldPower) {
            this.changeDetected = true;
            console.log(`DoCheck: Power changed to "${this.power}" from "${this.oldPower}"`);
            this.oldPower = this.power;
        }

        if (this.changeDetected) {
            this.noChangeCount = 0;
        } else {
            // log that hook was called when there was no relevant change.
            let count = this.noChangeCount += 1;
            let noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;

            if (count === 1) {
                console.log(noChangeMsg);
            } else {
                //this.changeLog[this.changeLog.length - 1] = noChangeMsg;
            }
        }

        this.changeDetected = false;
    }
}
