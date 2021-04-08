import { AbstractTaxNumberUtilsService } from './abstract-tax-number-utils.service';
import { CpfUtilsService } from './cpf-utils.service';
import { CnpjUtilsService } from './cnpj-utils.service';
import { Country } from '../../../content-maker/location/country/country.model';

export class TaxNumberUtilsFactoryService {

    getUtilsServiceByCountry(country: Country, isIndividual?: boolean): AbstractTaxNumberUtilsService {

        return this.getUtilsServiceByCountryCode(country ? country.code : null, isIndividual);

    }

    getUtilsServiceByCountryCode(code: string | null, isIndividual?: boolean): AbstractTaxNumberUtilsService {

        if (!code) code = 'br';

        switch (code.toLowerCase()) {

            case 'br':
            default:
                return isIndividual ? new CpfUtilsService() : new CnpjUtilsService();

        }

    }

}
