import { TestBed, inject } from '@angular/core/testing';

import { ValidationService } from './validation.service';
import { Schema } from 'mongoose';
import * as moment from 'moment';
import * as validator from 'validator';

enum AppAlias {
  ITDOCS = 'itdocs',
}

enum EmailType {
  PERSONAL = 'personal',
  WORK = 'work',
}

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

enum PhoneType {
  PERSONAL = 'personal',
  WORK = 'work',
}

enum AddressType {
  HOME = 'home',
  WORK = 'work',
  DELIVERY = 'delivery',
}

const CountrySchema: Schema = new Schema({
  name: { type: String, trim: true, required: true, index: true, unique: true },
  code: { type: String, trim: true, required: true, index: true, unique: true },
});

const RoleSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  alias: { type: String, required: true, trim: true },
  isActive: { type: Boolean, required: true, default: true },
  description: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now, trim: true },
  lastUpdate: { type: Date, default: Date.now, trim: true },
});

const AppSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  alias: { type: String, enum: Object.keys(AppAlias).map(key => AppAlias[key]) },
  isActive: { type: Boolean, required: true, default: true },
  isPublic: { type: Boolean, required: true, default: true },
  roles: { type: [ RoleSchema ], required: true , default: undefined },
  logo: { type: String, trim: true },
  description: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now, trim: true },
  lastUpdate: { type: Date, default: Date.now, trim: true },
});

const StateSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  country: { type: CountrySchema, required: true },
});

const CitySchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  state: { type: StateSchema, required: true },
});

const EmailSchema: Schema = new Schema({
  type: { type: String, required: true, trim: true , enum: Object.keys(EmailType).map(key => EmailType[key])},
  address: { type: String, required: true, trim: true, unique: true },
  isPrimary: { type: Boolean, required: true, default: true },
  isVerified: { type: Boolean, default: false },
});

const PasswordSchema: Schema = new Schema({
  hash: { type: String, required: true, trim: true },
  salt: { type: String, required: true, trim: true },
  algorithm: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now, trim: true },
  lastUpdate: { type: Date, default: Date.now, trim: true },
});

const CredentialsSchema: Schema = new Schema({
  current: { type: PasswordSchema, required: true },
  new: { type: PasswordSchema, required: true },
  confirm: { type: PasswordSchema, required: true },
  old: { type: [ PasswordSchema ], default: undefined},
});

const LanguageSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true, index: true , unique: true },
  code: { type: String, required: true, trim: true, index: true , unique: true },
  picture: { type: String, required: true, trim: true },
});

const PhoneSchema: Schema = new Schema({
  type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
  number: { type: String, required: true, trim: true },
  isPrimary: { type: Boolean, required: true, default: true },
  isVerified: { type: Boolean, default: false },
});

const MaritalStatusSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
});

const OccupationSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
});

const IncomeSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
});

const AddressSchema: Schema = new Schema({
  type: { type: String, required: true, enum: Object.keys(AddressType).map(key => AddressType[key]) },
  name: { type: String, required: true, trim: true },
  postalCode: { type: String, required: true, trim: true },
  street: { type: String, required: true, trim: true },
  number: { type: String, required: true, trim: true },
  complement: { type: String, required: true, trim: true },
  district: { type: String, required: true, trim: true },
  city: { type: CitySchema, required: true },
});

const AppInstanceSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  app: { type: AppSchema, required: true },
  roles: { type: [ RoleSchema ], required: true , default: undefined },
  isActive: { type: Boolean, required: true, default: true },
  createdAt: { type: Date , default: Date.now, trim: true },
  lastUpdate: { type: Date , default: Date.now, trim: true },
});

const UserSchema: Schema = new Schema({
  name: { type: String, trim: true , required: true},
  emails: { type: [ EmailSchema ], required: true , default: undefined },
  credentials: { type: CredentialsSchema, excludeIndexes: true },
  isActive:  { type: Boolean, default: true },
  isIndividual: { type: Boolean, default: true },
  language: { type: LanguageSchema, excludeIndexes: true },
  timezone: { type: String, trim: true },
  surname: { type: String, trim: true },
  birthDate: { type: Date, trim: true },
  picture: { type: String, trim: true },
  taxNumber: { type: String, trim: true },
  gender: { type: String, trim: true, enum: Object.keys(Gender).map(key => Gender[key]) },
  phones: { type: [ PhoneSchema ], default: undefined, excludeIndexes: true },
  maritalStatus: { type: MaritalStatusSchema, excludeIndexes: true },
  occupation: { type: OccupationSchema, excludeIndexes: true },
  income: { type: IncomeSchema, excludeIndexes: true },
  nationality: { type: CountrySchema, excludeIndexes: true },
  addresses: { type: [ AddressSchema ], default: undefined, excludeIndexes: true },
  appInstances: { type: [ AppInstanceSchema ], default: undefined, excludeIndexes: true },
  createdAt: { type: Date , default: Date.now, trim: true },
  lastUpdate: { type: Date , default: Date.now, trim: true },
});

let countryObj: any;
let appObj: any;

describe('ValidationService', () => {

  countryObj = {
    _id: '5b7701e05ef4f2555873b6e6',
    name: 'Brazil',
    code: 'br'
  };

  appObj = {
    name: 'App',
    alias: 'app-alias',
    isActive: true,
    isPublic: false,
    roles: [
      {
        name: 'role 1',
        alias: 'role alias 1',
        isActive: true,
        description: 'role description 1',
        createdAt: '2016-03-30T00:00:00+0000',
        lastUpdate: '2016-03-30T00:00:00+0000',
      }
    ],
    logo: 'logo.png',
    description: 'description of the app',
    createdAt: '2016-03-30T00:00:00+0000',
    lastUpdate: '2016-03-30T00:00:00+0000',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationService]
    });
  });

  it('should be created', inject([ValidationService], (service: ValidationService) => {
    expect(service).toBeTruthy();
  }));

  it('transform should call validateObject with object',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateObject').and.returnValue(true);
      const object = {};
      const schema: Schema = new Schema({});
      const shouldValidateID = true;
      service.schema = schema;
      service.shouldValidateID = shouldValidateID;
      const result = service.transform(object, {metatype: {}});
      expect(spy).toHaveBeenCalledWith(object);
  }));

  it('validateObject when no sub document should call validatePropertyParentNotRequired for all 3 elements',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);

      service.schema = CountrySchema;

      service.validateObject(countryObj);

      CountrySchema.eachPath((subPath: string, schemaType: any) => {
        if (subPath !== '__v') {
          expect(spy).toHaveBeenCalledWith(countryObj[subPath], schemaType, subPath);
        }
      });

      expect(spy).toHaveBeenCalledTimes(3);
  }));

  it('validateObject when subdocument should call validatePropertyParentNotRequired for all 3 elements',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);
        const object = {};
        service.schema = StateSchema;

      service.validateObject(object);

      expect(spy).toHaveBeenCalledTimes(3);
  }));

  it('validateObject when double level subdocument with subdocument should call validatePropertyParentNotRequired for all 3 elements',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);
      const object = {};
      service.schema = CitySchema;

      service.validateObject(object);

      expect(spy).toHaveBeenCalledTimes(3);
  }));

  it('validateObject sample array embbebed should call validatePropertyParentNotRequired for all 9 elements',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);
      service.schema = AppSchema;

      service.validateObject(appObj);

      AppSchema.eachPath((subPath: string, schemaType: any) => {
        if (subPath !== '__v') {
          expect(spy).toHaveBeenCalledWith(appObj[subPath], schemaType, subPath);
        }
      });

      expect(spy).toHaveBeenCalledTimes(10);
  }));

  it('validateObject when path "__v" should not call validatePropertyParentNotRequired for this path',
    inject([ValidationService], (service: ValidationService) => {
      const __Schema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const spy = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);
      const object = {
        name: 'name of the object',
        __v: 'some value'
      };
      service.schema = __Schema;

      service.validateObject(object);

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenCalledWith('name of the object', jasmine.any(Object), 'name');
      expect(spy).toHaveBeenCalledWith(undefined, jasmine.any(Object), '_id');
      expect(spy).not.toHaveBeenCalledWith('some value', jasmine.any(Object), 'some value');
  }));

  it('validateObject when path "_id" and should not validate id should call validatePropertyParentNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const __Schema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
      });
      const spy = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);
      const spy2 = spyOn(service, 'validatePropertyParentRequired').and.returnValue(true);
      const object = {
        name: 'name of the object',
        __v: 'some value'
      };
      service.schema = __Schema;
      service.shouldValidateID = false;

      service.validateObject(object);

      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy2).toHaveBeenCalledTimes(0);
      expect(spy).toHaveBeenCalledWith('name of the object', jasmine.any(Object), 'name');
      expect(spy).toHaveBeenCalledWith(undefined, jasmine.any(Object), '_id');
      expect(spy2).not.toHaveBeenCalledWith(undefined, jasmine.any(Object), '_id');
  }));

  it('validateObject when path "_id" and should validate id should call validatePropertyParentRequired',
    inject([ValidationService], (service: ValidationService) => {
      const __Schema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
      });
      const spy = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);
      const spy2 = spyOn(service, 'validatePropertyParentRequired').and.returnValue(true);
      const object = {
        name: 'name of the object',
        __v: 'some value'
      };
      service.schema = __Schema;
      service.shouldValidateID = true;

      service.validateObject(object);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('name of the object', jasmine.any(Object), 'name');
      expect(spy).not.toHaveBeenCalledWith(undefined, jasmine.any(Object), '_id');
      expect(spy2).toHaveBeenCalledWith(undefined, jasmine.any(Object), '_id');
  }));

  it('validatePropertyParentRequired should call validateProperty with parent required',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateProperty');
      const value: any = '5b7701e05ef4f2555873b6e6';
      const schemaType: any =  CountrySchema.path('_id');
      schemaType.isRequired = true;
      const path = '_id';

      service.validatePropertyParentRequired(value, schemaType, path);

      expect(spy).toHaveBeenCalledWith(value, schemaType, path, true);
  }));

  it('validatePropertyParentRequired When value undefined and required should throw error',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateProperty');
      const value: any = undefined;
      const schemaType: any =  CountrySchema.path('_id');
      schemaType.isRequired = true;
      const path = '_id';

      expect( () => {
        service.validatePropertyParentRequired(value, schemaType, path);
      }).toThrow(new Error(`invalid ${path}`));

      expect(spy).not.toHaveBeenCalled();
  }));

  it('validatePropertyParentRequired When value undefined and not required should call validatePropertyParentRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateProperty');
      const value: any = undefined;
      const schemaType: any =  CountrySchema.path('_id');
      schemaType.isRequired = false;
      const path = '_id';

      service.validatePropertyParentRequired(value, schemaType, path);

      expect(spy).toHaveBeenCalledWith(value, schemaType, path, true);
  }));

  it('validatePropertyParentNotRequired should call validateProperty with parent not required',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateProperty');
      const value: any = '5b7701e05ef4f2555873b6e6';
      const schemaType: any =  CountrySchema.path('_id');
      schemaType.isRequired = true;
      const path = '_id';

      service.validatePropertyParentNotRequired(value, schemaType, path);

      expect(spy).toHaveBeenCalledWith(value, schemaType, path, false);
  }));

  it('validatePropertyParentNotRequired when value undefined and not required should not call validateProperty',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateProperty');
      const value: any = undefined;
      const schemaType: any =  CountrySchema.path('_id');
      schemaType.isRequired = false;
      const path = '_id';

      service.validatePropertyParentNotRequired(value, schemaType, path);

      expect(spy).not.toHaveBeenCalled();
  }));

  it('validatePropertyParentNotRequired when value undefined and required should call validateProperty',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateProperty');
      const value: any = undefined;
      const schemaType: any =  CountrySchema.path('_id');
      schemaType.isRequired = true;
      const path = '_id';

      service.validatePropertyParentNotRequired(value, schemaType, path);

      expect(spy).toHaveBeenCalledWith(value, schemaType, path, false);
  }));

  it('validateProperty when type "ObjectID" and Parent required should call validateObjectID',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateObjectID');
      const value: any = '5b7701e05ef4f2555873b6e6';
      const schemaType: any =  CountrySchema.path('_id');
      schemaType.isRequired = true;
      const path = '_id';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "ObjectID" and Parent not required should call validateObjectID',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateObjectID');
      const value: any = '5b7701e05ef4f2555873b6e6';
      const schemaType: any =  CountrySchema.path('_id');
      schemaType.isRequired = undefined;
      const path = '_id';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "String" and required and Parent required should call validateStringRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateStringRequired');

      const value: any = 'country name';
      const schemaType: any = CountrySchema.path('name');
      schemaType.isRequired = true;
      const path = 'name';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "String" and not required and Parent required should call validateStringNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateStringNotRequired');

      const value: any = 'country name';
      const schemaType: any = CountrySchema.path('name');
      schemaType.isRequired = undefined;
      const path = 'name';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Array" and required and Parent required should call validateArrayRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateArrayRequired');

      const value: any = [{}];
      const schemaType: any = AppSchema.path('roles');
      schemaType.isRequired = true;
      const path = 'roles';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Array" and not required and Parent required should call validateArrayNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateArrayNotRequired');

      const value: any = [{}];
      const schemaType: any = AppSchema.path('roles');
      schemaType.isRequired = undefined;
      const path = 'roles';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Boolean" and required and Parent required should call validateBooleanRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateBooleanRequired');

      const value: any = true;
      const schemaType: any = RoleSchema.path('isActive');
      schemaType.isRequired = true;
      const path = 'isActive';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Boolean" and not required and Parent required should call validateBooleanNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateBooleanNotRequired');

      const value: any = true;
      const schemaType: any = RoleSchema.path('isActive');
      schemaType.isRequired = undefined;
      const path = 'isActive';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Number" and required and Parent required should call validateNumberRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateNumberRequired');

      const __Schema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        code: { type: Number, trim: true, required: true, index: true, unique: true },
        __v: { },
      });

      const value: any = 200;
      const schemaType: any = __Schema.path('code');
      schemaType.isRequired = true;
      const path = 'code';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Number" and not required and Parent required should call validateNumberNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateNumberNotRequired');

      const __Schema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        code: { type: Number, trim: true, required: true, index: true, unique: true },
        __v: { },
      });

      const value: any = 200;
      const schemaType: any = __Schema.path('code');
      schemaType.isRequired = undefined;
      const path = 'code';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Date" and required and Parent required should call validateDateRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateDateRequired');

      const value: any = '2016-03-30T00:00:00+0000';
      const schemaType: any = AppSchema.path('createdAt');
      schemaType.isRequired = true;
      const path = 'createdAt';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Date" and not required and Parent required should call validateDateNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateDateNotRequired');

      const value: any = '2016-03-30T00:00:00+0000';
      const schemaType: any = AppSchema.path('createdAt');
      schemaType.isRequired = undefined;
      const path = 'createdAt';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Embedded" and required and Parent required should call validateEmbeddedObject',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateEmbeddedObject');

      const value: any = {};
      const schemaType: any = StateSchema.path('country');
      schemaType.isRequired = true;
      const path = 'country';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type "Embedded" and not required and Parent required should call validateEmbeddedObject',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateEmbeddedObject');

      const value: any = {};
      const schemaType: any = StateSchema.path('country');
      schemaType.isRequired = undefined;
      const path = 'country';

      service.validateProperty(value, schemaType, path, true);

      expect(spy).toHaveBeenCalledWith(value, path, true, schemaType);
  }));

  it('validateProperty when type unknown and Parent required should not call validate',
    inject([ValidationService], (service: ValidationService) => {
      const spyEmbeddedObject = spyOn(service, 'validateEmbeddedObject');
      const spyDate = spyOn(service, 'validateDateRequired');
      const spyNumber = spyOn(service, 'validateNumberRequired');
      const spyBoolean = spyOn(service, 'validateBooleanRequired');
      const spyArray = spyOn(service, 'validateArrayRequired');
      const spyString = spyOn(service, 'validateStringRequired');
      const spyObjectID = spyOn(service, 'validateObjectID');

      const spyDateNot = spyOn(service, 'validateDateNotRequired');
      const spyNumberNot = spyOn(service, 'validateNumberNotRequired');
      const spyBooleanNot = spyOn(service, 'validateBooleanNotRequired');
      const spyArrayNot = spyOn(service, 'validateArrayNotRequired');
      const spyStringNot = spyOn(service, 'validateStringNotRequired');

      const value: any = {};
      const schemaType = {
        instance: 'Unknown'
      };
      const path = 'country';

      service.validateProperty(value, schemaType, path, true);

      expect(spyEmbeddedObject).not.toHaveBeenCalled();
      expect(spyDate).not.toHaveBeenCalled();
      expect(spyNumber).not.toHaveBeenCalled();
      expect(spyBoolean).not.toHaveBeenCalled();
      expect(spyArray).not.toHaveBeenCalled();
      expect(spyString).not.toHaveBeenCalled();
      expect(spyObjectID).not.toHaveBeenCalled();

      expect(spyDateNot).not.toHaveBeenCalled();
      expect(spyNumberNot).not.toHaveBeenCalled();
      expect(spyBooleanNot).not.toHaveBeenCalled();
      expect(spyArrayNot).not.toHaveBeenCalled();
      expect(spyStringNot).not.toHaveBeenCalled();
  }));

  it('validateProperty when type "String" and required and Parent not required should call validateStringRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateStringRequired');

      const value: any = 'country name';
      const schemaType: any = CountrySchema.path('name');
      schemaType.isRequired = true;
      const path = 'name';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "String" and not required and Parent not required should call validateStringNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateStringNotRequired');

      const value: any = 'country name';
      const schemaType: any = CountrySchema.path('name');
      schemaType.isRequired = undefined;
      const path = 'name';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Array" and required and Parent not required should call validateArrayRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateArrayRequired');

      const value: any = [{}];
      const schemaType: any = AppSchema.path('roles');
      schemaType.isRequired = true;
      const path = 'roles';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Array" and not required and Parent not required should call validateArrayNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateArrayNotRequired');

      const value: any = [{}];
      const schemaType: any = AppSchema.path('roles');
      schemaType.isRequired = undefined;
      const path = 'roles';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Boolean" and required and Parent not required should call validateBooleanRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateBooleanRequired');

      const value: any = true;
      const schemaType: any = RoleSchema.path('isActive');
      schemaType.isRequired = true;
      const path = 'isActive';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Boolean" and not required and Parent not required should call validateBooleanNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateBooleanNotRequired');

      const value: any = true;
      const schemaType: any = RoleSchema.path('isActive');
      schemaType.isRequired = undefined;
      const path = 'isActive';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Number" and required and Parent not required should call validateNumberRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateNumberRequired');

      const __Schema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        code: { type: Number, trim: true, required: true, index: true, unique: true },
        __v: { },
      });

      const value: any = 200;
      const schemaType: any = __Schema.path('code');
      schemaType.isRequired = true;
      const path = 'code';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Number" and not required and Parent not required should call validateNumberNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateNumberNotRequired');

      const __Schema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        code: { type: Number, trim: true, required: true, index: true, unique: true },
        __v: { },
      });

      const value: any = 200;
      const schemaType: any = __Schema.path('code');
      schemaType.isRequired = undefined;
      const path = 'code';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Date" and required and Parent not required should call validateDateRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateDateRequired');

      const value: any = '2016-03-30T00:00:00+0000';
      const schemaType: any = AppSchema.path('createdAt');
      schemaType.isRequired = true;
      const path = 'createdAt';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Date" and not required and Parent not required should call validateDateNotRequired',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateDateNotRequired');

      const value: any = '2016-03-30T00:00:00+0000';
      const schemaType: any = AppSchema.path('createdAt');
      schemaType.isRequired = undefined;
      const path = 'createdAt';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Embedded" and required should call validateEmbeddedObject',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateEmbeddedObject');

      const value: any = {};
      const schemaType: any = StateSchema.path('country');
      schemaType.isRequired = true;
      const path = 'country';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type "Embedded" and not required and Parent not required should call validateEmbeddedObject',
    inject([ValidationService], (service: ValidationService) => {
      const spy = spyOn(service, 'validateEmbeddedObject');

      const value: any = {};
      const schemaType: any = StateSchema.path('country');
      schemaType.isRequired = undefined;
      const path = 'country';

      service.validateProperty(value, schemaType, path, false);

      expect(spy).toHaveBeenCalledWith(value, path, false, schemaType);
  }));

  it('validateProperty when type unknown and Parent not required should not call validate',
    inject([ValidationService], (service: ValidationService) => {
      const spyEmbeddedObject = spyOn(service, 'validateEmbeddedObject');
      const spyDate = spyOn(service, 'validateDateRequired');
      const spyNumber = spyOn(service, 'validateNumberRequired');
      const spyBoolean = spyOn(service, 'validateBooleanRequired');
      const spyArray = spyOn(service, 'validateArrayRequired');
      const spyString = spyOn(service, 'validateStringRequired');
      const spyObjectID = spyOn(service, 'validateObjectID');

      const spyDateNot = spyOn(service, 'validateDateNotRequired');
      const spyNumberNot = spyOn(service, 'validateNumberNotRequired');
      const spyBooleanNot = spyOn(service, 'validateBooleanNotRequired');
      const spyArrayNot = spyOn(service, 'validateArrayNotRequired');
      const spyStringNot = spyOn(service, 'validateStringNotRequired');

      const value: any = {};
      const schemaType = {
        instance: 'Unknown'
      };
      const path = 'country';

      service.validateProperty(value, schemaType, path, false);

      expect(spyEmbeddedObject).not.toHaveBeenCalled();
      expect(spyDate).not.toHaveBeenCalled();
      expect(spyNumber).not.toHaveBeenCalled();
      expect(spyBoolean).not.toHaveBeenCalled();
      expect(spyArray).not.toHaveBeenCalled();
      expect(spyString).not.toHaveBeenCalled();
      expect(spyObjectID).not.toHaveBeenCalled();

      expect(spyDateNot).not.toHaveBeenCalled();
      expect(spyNumberNot).not.toHaveBeenCalled();
      expect(spyBooleanNot).not.toHaveBeenCalled();
      expect(spyArrayNot).not.toHaveBeenCalled();
      expect(spyStringNot).not.toHaveBeenCalled();
  }));

  it('traverse when subproperty level 1 defined should return it',
    inject([ValidationService], (service: ValidationService) => {

      const object = {
        name: 'name of the object'
      };

      const result = service.traverse(object, 'name');

      expect(result).toEqual('name of the object');
  }));

  it('traverse when subproperty level 2 defined should return it',
    inject([ValidationService], (service: ValidationService) => {

      const object = {
        name: {
          type: 'type of object'
        }
      };

      const result = service.traverse(object, 'name.type');

      expect(result).toEqual('type of object');
  }));

  it('traverse when subproperty level 3 defined should return it',
    inject([ValidationService], (service: ValidationService) => {

      const object = {
        name: {
          type: {
            code: 'code of object'
          }
        }
      };

      const result = service.traverse(object, 'name.type.code');

      expect(result).toEqual('code of object');
  }));

  it('traverse when object null or undefined should return undefined',
    inject([ValidationService], (service: ValidationService) => {

      const object = undefined;
      const result = service.traverse(object, 'name');
      expect(result).toBeUndefined();

      const object2 = null;
      const result2 = service.traverse(object2, 'name');
      expect(result2).toBeUndefined();
  }));

  it('traverse when subproperty level 1 undefined should return undefined',
    inject([ValidationService], (service: ValidationService) => {

      const object = {
        name: undefined
      };

      const result = service.traverse(object, 'name');

      expect(result).toBeUndefined();
  }));

  it('traverse when subproperty level 1 with level 2 undefined should return undefined',
    inject([ValidationService], (service: ValidationService) => {

      const object = {
        name: undefined
      };

      const result = service.traverse(object, 'name.codigo');

      expect(result).toBeUndefined();
  }));

  it('validateEmbeddedObject when parent required should call validatePropertyParentRequired 3 times',
    inject([ValidationService], (service: ValidationService) => {
      const object = {
        name: 'name state',
        country: {
          name: 'name country',
          code: 'code country'
        }
      };
      const schemaType = StateSchema.path('country');
      const spyValidate = spyOn(service, 'validatePropertyParentRequired').and.returnValue(true);

      service.validateEmbeddedObject(object, 'state', true, schemaType);

      expect(spyValidate).toHaveBeenCalledTimes(3);

  }));

  it('validateEmbeddedObject when parent required and property "__v" should call validatePropertyParentRequired 2 times',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: ChildSchema , required: true }
      });
      const object = {
        name: 'name of the object',
        __v: 'some value'
      };
      const schemaType = FatherSchema.path('child');
      const spyValidate = spyOn(service, 'validatePropertyParentRequired').and.returnValue(true);

      service.validateEmbeddedObject(object, 'state', true, schemaType);

      expect(spyValidate).toHaveBeenCalledTimes(2);

  }));

  it('validateEmbeddedObject when parent not required should call validate 3 times',
    inject([ValidationService], (service: ValidationService) => {
      const object = {
        _id: '5b7701e05ef4f2555873b6e6',
        name: 'name state',
        country: {
          name: 'name country',
          code: 'code country'
        }
      };
      const schemaType = StateSchema.path('country');
      const spyValidate = spyOn(service, 'validatePropertyParentRequired').and.returnValue(true);
      const spyValidateNot = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);

      service.validateEmbeddedObject(object, 'state', false, schemaType);

      expect(spyValidate).toHaveBeenCalledTimes(1);
      expect(spyValidateNot).toHaveBeenCalledTimes(2);

  }));

  it('validateEmbeddedObject when parent not required and property "__v" should call validate 2 times',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: ChildSchema , required: true }
      });
      const object = {
        _id: '5b7701e05ef4f2555873b6e6',
        name: 'name of the object',
        __v: 'some value'
      };
      const schemaType = FatherSchema.path('child');
      const spyValidate = spyOn(service, 'validatePropertyParentRequired').and.returnValue(true);
      const spyValidateNot = spyOn(service, 'validatePropertyParentNotRequired').and.returnValue(true);

      service.validateEmbeddedObject(object, 'child', false, schemaType);

      expect(spyValidate).toHaveBeenCalledTimes(1);
      expect(spyValidateNot).toHaveBeenCalledTimes(1);

  }));

  it('validateArrayRequired when parent required and value undefined should throw error',
    inject([ValidationService], (service: ValidationService) => {
      const value = undefined;
      const schemaType = StateSchema.path('country');
      const path = 'country';
      expect( () => {
        service.validateArrayRequired(value, path, true, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateArrayRequired when parent required and value empty should throw error',
    inject([ValidationService], (service: ValidationService) => {
      const value = [];
      const schemaType = StateSchema.path('country');
      const path = 'country';
      expect( () => {
        service.validateArrayRequired(value, path, true, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateArrayRequired when parent required and value not empty should call validateEmbeddedObject 1 times',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = [
        {
          name: 'some name',
          __v: 'some value'
        }
      ];
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      service.validateArrayRequired(value, 'child', true, schemaType);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name',
        __v: 'some value'
      }, 'child', true, schemaType);
  }));

  it('validateArrayRequired when parent required and value not empty should call validateEmbeddedObject 3 times',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = [
        {
          name: 'some name',
          __v: 'some value'
        },
        {
          name: 'some name 2',
          __v: 'some value 2'
        },
        {
          name: 'some name 3',
          __v: 'some value 3'
        }
      ];
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      service.validateArrayRequired(value, 'child', true, schemaType);
      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name',
        __v: 'some value'
      }, 'child', true, schemaType);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name 2',
        __v: 'some value 2'
      }, 'child', true, schemaType);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name 3',
        __v: 'some value 3'
      }, 'child', true, schemaType);
  }));

  it('validateArrayRequired when parent not required and value undefined should return',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = undefined;
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      expect( () => {
        service.validateArrayRequired(value, 'child', false, schemaType);
      }).not.toThrow(new Error(`invalid child`));

      expect(spy).not.toHaveBeenCalled();
  }));

  it('validateArrayRequired when parent not required and value empty should throw error',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = [];
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      expect( () => {
        service.validateArrayRequired(value, 'child', false, schemaType);
      }).toThrow(new Error(`invalid child`));

      expect(spy).not.toHaveBeenCalled();
  }));

  it('validateArrayRequired when parent not required and value not empty should call validateEmbeddedObject 1 times',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = [
        {
          name: 'some name',
          __v: 'some value'
        }
      ];
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      service.validateArrayRequired(value, 'child', false, schemaType);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name',
        __v: 'some value'
      }, 'child', false, schemaType);
  }));

  it('validateArrayRequired when parent not required and value not empty should call validateEmbeddedObject 3 times',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = [
        {
          name: 'some name',
          __v: 'some value'
        },
        {
          name: 'some name 2',
          __v: 'some value 2'
        },
        {
          name: 'some name 3',
          __v: 'some value 3'
        }
      ];
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      service.validateArrayRequired(value, 'child', false, schemaType);
      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name',
        __v: 'some value'
      }, 'child', false, schemaType);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name 2',
        __v: 'some value 2'
      }, 'child', false, schemaType);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name 3',
        __v: 'some value 3'
      }, 'child', false, schemaType);
  }));

  it('validateArrayNotRequired when value undefined should return sucess',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = undefined;
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      expect( () => {
        service.validateArrayNotRequired(value, 'child', false, schemaType);
      }).not.toThrow(new Error(`invalid child`));
      expect(spy).not.toHaveBeenCalled();
  }));

  it('validateArrayNotRequired when value defined and empty should throw error',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = [];
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      expect( () => {
        service.validateArrayNotRequired(value, 'child', false, schemaType);
      }).toThrow(new Error(`invalid child`));
      expect(spy).not.toHaveBeenCalled();
  }));

  it('validateArrayNotRequired when value not empty should call validateEmbeddedObject 1 times',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = [
        {
          name: 'some name',
          __v: 'some value'
        }
      ];
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      service.validateArrayNotRequired(value, 'child', true, schemaType);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name',
        __v: 'some value'
      }, 'child', true, schemaType);
  }));

  it('validateArrayNotRequired when value not empty should call validateEmbeddedObject 3 times',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const FatherSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        child: { type: [ChildSchema] , required: true }
      });
      const value = [
        {
          name: 'some name',
          __v: 'some value'
        },
        {
          name: 'some name 2',
          __v: 'some value 2'
        },
        {
          name: 'some name 3',
          __v: 'some value 3'
        }
      ];
      const schemaType = FatherSchema.path('child');
      const spy = spyOn(service, 'validateEmbeddedObject');

      service.validateArrayNotRequired(value, 'child', true, schemaType);
      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name',
        __v: 'some value'
      }, 'child', true, schemaType);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name 2',
        __v: 'some value 2'
      }, 'child', true, schemaType);
      expect(spy).toHaveBeenCalledWith({
        name: 'some name 3',
        __v: 'some value 3'
      }, 'child', true, schemaType);
  }));

  it('validateObjectID when parent required and value undefined should throw error',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const schemaType = ChildSchema.path('_id');
      const value = undefined;
      expect( () => {
        service.validateObjectID(value, '_id', true, schemaType);
      }).toThrow(new Error(`invalid _id`));
  }));

  it('validateObjectID when parent required and value not mongo id should throw error',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const schemaType = ChildSchema.path('_id');
      const value = '123';
      expect( () => {
        service.validateObjectID(value, '_id', true, schemaType);
      }).toThrow(new Error(`invalid _id`));
  }));

  it('validateObjectID when parent required and value mongo id should not throw error',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const schemaType = ChildSchema.path('_id');
      const value = '5b78c1cb9ecb6a8b443aa885';
      expect( () => {
        service.validateObjectID(value, '_id', true, schemaType);
      }).not.toThrow(new Error(`invalid _id`));
  }));

  it('validateObjectID when parent not required and value undefined should not throw error',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const schemaType = ChildSchema.path('_id');
      const value = undefined;
      expect( () => {
        service.validateObjectID(value, '_id', false, schemaType);
      }).not.toThrow(new Error(`invalid _id`));
  }));

  it('validateObjectID when parent not required and value not mongo id should throw error',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const schemaType = ChildSchema.path('_id');
      const value = '123';
      expect( () => {
        service.validateObjectID(value, '_id', false, schemaType);
      }).toThrow(new Error(`invalid _id`));
  }));

  it('validateObjectID when parent not required and value mongo id should not throw error',
    inject([ValidationService], (service: ValidationService) => {
      const ChildSchema: Schema = new Schema({
        name: { type: String, trim: true, required: true, index: true, unique: true },
        __v: { },
      });
      const schemaType = ChildSchema.path('_id');
      const value = '5b78c1cb9ecb6a8b443aa885';
      expect( () => {
        service.validateObjectID(value, '_id', false, schemaType);
      }).not.toThrow(new Error(`invalid _id`));
  }));

  it('validateStringRequired when value undefined should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });
      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = undefined;
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringRequired when value null should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = null;
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringRequired when type not string should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = 12;
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringRequired when should trim and value empty should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = '';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringRequired when value not in enum should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = 'some value';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringRequired when value empty and not trim and not enum should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true },
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = '';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringRequired when value ok and not trim and not enum should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true },
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = 'some value';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringRequired when value in enum should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = 'work';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringNotRequired when value undefined should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = undefined;
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringNotRequired when value null should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = null;
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringNotRequired when trim and value empty should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, trim: true , enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = '';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringNotRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringNotRequired when not trim and value empty should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = '';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringNotRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringNotRequired when not enum and value ok should not not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true },
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = 'some value';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringNotRequired when not trim and not enum and value empty should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true },
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = '';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringNotRequired when not trim and value not in enum should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = 'some value not in enum';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringNotRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateStringNotRequired when value in enum should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        type: { type: String, required: true, enum: Object.keys(PhoneType).map(key => PhoneType[key])},
      });

      const path = 'type';
      const schemaType: any = ChildSchema.path(path);
      const value = 'work';
      const options: any = schemaType.options;
      const enumTypes: Array<any> = (options.enum && options.enum.length) ? options.enum : undefined;
      const messageEnum: string = enumTypes ? ` Should be [${enumTypes.toString()}]` : '';
      expect( () => {
        service.validateStringNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}${messageEnum}`));
  }));

  it('validateBooleanRequired when value undefined should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = undefined;

      expect(() => {
        service.validateBooleanRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanRequired when value null should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = null;

      expect(() => {
        service.validateBooleanRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanRequired when value not boolean should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = 1;

      expect(() => {
        service.validateBooleanRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanRequired when value true should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = true;

      expect(() => {
        service.validateBooleanRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanRequired when value false should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = false;

      expect(() => {
        service.validateBooleanRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanNotRequired when value undefined should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = undefined;

      expect(() => {
        service.validateBooleanNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanNotRequired when value null should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = null;

      expect(() => {
        service.validateBooleanNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanNotRequired when value not boolean should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = 1;

      expect(() => {
        service.validateBooleanNotRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanNotRequired when value true should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = true;

      expect(() => {
        service.validateBooleanNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateBooleanNotRequired when value false should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        isActive: { type: Boolean, required: true },
      });
      const path = 'isActive';
      const schemaType: any = ChildSchema.path(path);
      const value = false;

      expect(() => {
        service.validateBooleanNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateNumberRequired when value undefined should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        code: { type: Number, required: true },
      });
      const path = 'code';
      const schemaType: any = ChildSchema.path(path);
      const value = undefined;

      expect(() => {
        service.validateNumberRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateNumberRequired when value null should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        code: { type: Number, required: true },
      });
      const path = 'code';
      const schemaType: any = ChildSchema.path(path);
      const value = null;

      expect(() => {
        service.validateNumberRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateNumberRequired when value not number should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        code: { type: Number, required: true },
      });
      const path = 'code';
      const schemaType: any = ChildSchema.path(path);
      const value = true;

      expect(() => {
        service.validateNumberRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateNumberRequired when value number should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        code: { type: Number, required: true },
      });
      const path = 'code';
      const schemaType: any = ChildSchema.path(path);
      const value = 20;

      expect(() => {
        service.validateNumberRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateNumberNotRequired when value undefined should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        code: { type: Number, required: true },
      });
      const path = 'code';
      const schemaType: any = ChildSchema.path(path);
      const value = undefined;

      expect(() => {
        service.validateNumberNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateNumberNotRequired when value null should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        code: { type: Number, required: true },
      });
      const path = 'code';
      const schemaType: any = ChildSchema.path(path);
      const value = null;

      expect(() => {
        service.validateNumberNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateNumberNotRequired when value not number should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        code: { type: Number, required: true },
      });
      const path = 'code';
      const schemaType: any = ChildSchema.path(path);
      const value = true;

      expect(() => {
        service.validateNumberNotRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateNumberNotRequired when value number should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        code: { type: Number, required: true },
      });
      const path = 'code';
      const schemaType: any = ChildSchema.path(path);
      const value = 20;

      expect(() => {
        service.validateNumberNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateRequired when value undefined should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = undefined;

      expect(() => {
        service.validateDateRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateRequired when value null should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = null;

      expect(() => {
        service.validateDateRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateRequired when value not string should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = 20;

      expect(() => {
        service.validateDateRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateRequired when should trim and value empty should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true, trim: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = '';

      expect(() => {
        service.validateDateRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateRequired when value not valid date should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true, trim: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = '12345678901019';

      expect(() => {
        service.validateDateRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateRequired when value valid date should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true, trim: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = '2011-10-05T14:48:00.000Z';

      expect(() => {
        service.validateDateRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));




  it('validateDateNotRequired when value undefined should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = undefined;

      expect(() => {
        service.validateDateNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateNotRequired when value null should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = null;

      expect(() => {
        service.validateDateNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateNotRequired when value not string should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = 20;

      expect(() => {
        service.validateDateNotRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateNotRequired when should trim and value empty should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true, trim: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = '';

      expect(() => {
        service.validateDateNotRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateNotRequired when value not valid date should throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true, trim: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = '12345678901019';

      expect(() => {
        service.validateDateNotRequired(value, path, false, schemaType);
      }).toThrow(new Error(`invalid ${path}`));
  }));

  it('validateDateNotRequired when value valid date should not throw error',
    inject([ValidationService], (service: ValidationService) => {

      const ChildSchema: Schema = new Schema({
        date: { type: Date, required: true, trim: true },
      });
      const path = 'date';
      const schemaType: any = ChildSchema.path(path);
      const value = '2011-10-05T14:48:00.000Z';

      expect(() => {
        service.validateDateNotRequired(value, path, false, schemaType);
      }).not.toThrow(new Error(`invalid ${path}`));
  }));

});
