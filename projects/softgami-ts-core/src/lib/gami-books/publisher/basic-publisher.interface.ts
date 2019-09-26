import { AppInstance } from '../../core/app/app-instance/app-instance.interface';
import { Organization } from '../../core/shared/organization/organization.interface';

export interface BasicPublisher extends Organization {
    appInstance?: AppInstance;
}
