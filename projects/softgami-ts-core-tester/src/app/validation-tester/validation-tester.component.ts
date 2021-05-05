import { Component } from '@angular/core';
import { ValidatorService } from 'projects/softgami-ts-core/src/lib/core/services/validator.service';
import { Publication } from 'projects/softgami-ts-core/src/lib/gami-books/publication/publication.model';

@Component({
    selector: 'app-validation-tester',
    templateUrl: './validation-tester.component.html',
})
export class ValidationTesterComponent {

    object: Publication = new Publication();
    json = '';
    isValid = false;
    invalidMessage = '';
    validObject: Publication | undefined;

    constructor() {

        const json = sessionStorage.getItem('json');
        if (json) this.json = json;

    }

    validate(): void {

        try {

            sessionStorage.setItem('json', this.json);
            const object = JSON.parse(this.json);

            this.validObject = ValidatorService.validate(object, Publication);

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
