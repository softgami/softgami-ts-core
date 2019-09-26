import { State } from '../state/state.interface';
import { Thing } from '../../thing/thing.interface';

export interface BasicCity extends Thing {
    state: State;
}
