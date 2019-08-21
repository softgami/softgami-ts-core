import { Observable } from 'rxjs';

export interface UseCase<T, R> {
    execute(param?: T): R | Observable<R>;
}
