import { AppInstance } from '../../app/app-instance/app-instance.interface';
import { Organization } from '../../shared/organization/organization.interface';

export interface BasicPublisher extends Organization {
    appInstance?: AppInstance;
}
