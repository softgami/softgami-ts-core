import { AppInstance } from '@lib/core/app/app-instance/app-instance.model';
import { Component } from '@angular/core';
import { User } from '@lib/core/user/user.model';
import { PersonType } from '@lib/content-maker/person/person-type.enum';
import { Publication } from '@lib/gami-books/publication/publication.model';
import { Task } from '@lib/bluebirdtask/task/task.model';
import { Sprint } from '@lib/bluebirdtask/sprint/sprint.model';
import { Schemable } from '@lib/core/shared/decorators/schemable.decorator';
import { Default } from '@lib/core/shared/decorators/default.decorator';
import { Trim } from '@lib/core/shared/decorators/trim.decorator';
import { QueryParam } from '@lib/core/shared/decorators/query-param.decorator';
import { Sortable } from '@lib/core/shared/decorators/sortable.decorator';
import { Type } from '@lib/core/shared/decorators/type.decorator';
import { Types } from '@lib/core/shared/models/types.enum';
import { Thing } from '@lib/core/shared/thing/thing.model';
import { Country } from '@lib/content-maker/location/country/country.model';
import { City } from '@lib/content-maker/location/city/city.model';

export class Test extends Thing {

    @Schemable()
    @Trim()
    @QueryParam()
    @Sortable({ label: 'NAME' })
    @Type({ type: Types.STRING })
    name: string = null;

    @Schemable()
    @Default(null)
    @Trim()
    @QueryParam()
    @Sortable({ label: 'CITIES', field: 'cities' })
    @Type({ type: Types.ARRAY, class: Test, arrayItemType: Types.OBJECT })
    cities?: Test[] = null;

}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    constructor() {
        const object: Test = new Test();

        console.log(object.fromJson({
            cities: [
                {
                    name: 'level 1',
                    cities: [
                        {
                            name: 'level 2'
                        }
                    ]
                }
            ],
        }));

    }

}
