import { Component } from '@angular/core';
import { SoftgamiTsUtilsService } from 'projects/softgami-ts-core/src/lib/core/services/softgami-ts-utils.service';
import { Task } from 'projects/softgami-ts-core/src/lib/bluebirdtask/task/task.model';
import { ValidatorService } from 'projects/softgami-ts-core/src/lib/core/services/validator.service';

@Component({
    selector: 'app-validation-tester',
    templateUrl: './validation-tester.component.html',
})
export class ValidationTesterComponent {

    object: Task = new Task();
    json = '';
    isValid = false;
    invalidMessage = '';
    validObject: Task | undefined;

    constructor() {

        const json = sessionStorage.getItem('json');
        if (json) this.json = json;

    }

    validate(): void {

        try {

            sessionStorage.setItem('json', this.json);
            const object = JSON.parse(this.json);

            this.validObject = ValidatorService.validate(object, Task, true, false);
            this.validObject = SoftgamiTsUtilsService.cleanEmpty(this.validObject);
            this.validObject = SoftgamiTsUtilsService.convertToCleanJson(this.validObject);

            this.isValid = true;
            console.log(this.validObject);

        } catch (error) {

            console.error(error);
            this.validObject = undefined;
            this.isValid = false;
            this.invalidMessage = error.message;

        }

    }

}
