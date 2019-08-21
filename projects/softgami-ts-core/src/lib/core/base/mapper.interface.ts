import { Observable } from 'rxjs';

export interface Mapper<I, O> {
    mapFrom(param: I): O | Observable<O>;
    mapTo(param: O): I | Observable<I>;
}
