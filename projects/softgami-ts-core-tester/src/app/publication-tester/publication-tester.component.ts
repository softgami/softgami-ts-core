import { BibliographyReferenceService } from 'projects/softgami-ts-core/src/lib/gami-books/services/bibliography-reference.service';
import { City } from 'projects/softgami-ts-core/src/lib/content-maker/location/city/city.model';
import { Component } from '@angular/core';
import { Person } from 'projects/softgami-ts-core/src/lib/content-maker/person/person.model';
import { PersonType } from 'projects/softgami-ts-core/src/lib/content-maker/person/person-type.enum';
import { Publication } from 'projects/softgami-ts-core/src/lib/gami-books/publication/publication.model';
import { Publisher } from 'projects/softgami-ts-core/src/lib/gami-books/publisher/publisher.model';

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
