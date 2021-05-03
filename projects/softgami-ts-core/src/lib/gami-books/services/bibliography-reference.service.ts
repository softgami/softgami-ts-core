import { Person } from '../../content-maker/person/person.model';
import { PersonType } from '../../content-maker/person/person-type.enum';
import { Publication } from '../publication/publication.model';

export class BibliographyReferenceService {

    static generateBibliographyReference(publication: Publication, countryCode?: string | null): string {

        switch (countryCode) {

            case ('br' || 'BR'):
                return BibliographyReferenceService.generateBibliographyReferenceBR(publication);
            default:
                return BibliographyReferenceService.generateBibliographyReferenceBR(publication);

        }

    }

    static generateBibliographyReferenceBR(publication: Publication): string {

        let reference = '';
        if (publication.authors) {

            const authorsReference: string[] = [];
            publication.authors.forEach((a: Person<PersonType.AUTHOR>) => {

                const authorNames: string[] | undefined = a.name?.split(' ');
                if (authorNames) {

                    const lastName: string | undefined = authorNames.pop();
                    if (lastName) authorsReference.push(`${lastName}, ${authorNames.join(' ')}`);

                }

            });

            if (authorsReference.length) reference += authorsReference.join('; ') + '.';

        }

        if (publication.name) reference += ` ${publication.name}.`;
        if (publication.edition) reference += ` ${publication.edition}.`;
        if (publication.city) reference += ` ${publication.city.name}:`;
        if (publication.publisher) reference += ` ${publication.publisher.name},`;
        if (publication.year) reference += ` ${publication.year}`;

        reference += '.';

        return reference;

    }

}
