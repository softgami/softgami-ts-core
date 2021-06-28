import { Component } from '@angular/core';
import { SoftgamiTsUtilsService, User, ValidatorService } from 'softgami-ts-core';

export class Temp {}

@Component({
    selector: 'app-validation-tester',
    templateUrl: './validation-tester.component.html',
})
export class ValidationTesterComponent {

    object: User = new User();
    json = '';
    isValid = false;
    invalidMessage = '';
    validObject: User | undefined;

    constructor() {

        const json = sessionStorage.getItem('json');
        if (json) this.json = json;

    }

    validate(): void {

        try {

            sessionStorage.setItem('json', this.json);
            const object = JSON.parse(this.json);

            console.log(object);
            this.validObject = ValidatorService.validate(object, undefined, this.object, false, false);
            if (this.validObject) {

                this.validObject = SoftgamiTsUtilsService.cleanEmpty(this.validObject);
                this.validObject = SoftgamiTsUtilsService.convertToCleanJson(this.validObject);

            }

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
