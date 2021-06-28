import {
    BibliographyReferenceService,
    City,
    Person,
    PersonType,
    Publication,
    Publisher,
} from 'softgami-ts-core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-publication-tester',
    templateUrl: './publication-tester.component.html',
})
export class PublicationTesterComponent {

    publication: Publication = new Publication();
    bibliographyReference: string | undefined;
    authors = '';
    cityName: string | undefined;
    publisherName: string | undefined;

    generateBibliographyReference(): void {

        const authorsNames = this.authors !== '' ? this.authors.split(',') : [];

        this.publication.authors = [];

        authorsNames.forEach((name: string) => {

            const author: Person<PersonType.AUTHOR> = new Person<PersonType.AUTHOR>();
            author.name = name;
            this.publication.authors?.push(author);

        });

        if (this.cityName) {

            const city: City = new City();
            city.name = this.cityName;
            this.publication.city = city;

        } else this.publication.city = null;

        if (this.publisherName) {

            const publisher: Publisher = new Publisher();
            publisher.name = this.publisherName;
            this.publication.publisher = publisher;

        } else this.publication.publisher = null;

        this.bibliographyReference = BibliographyReferenceService.generateBibliographyReference(this.publication);

    }

}
