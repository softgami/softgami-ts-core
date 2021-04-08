import { BoardList } from './board-list.model';

export interface BoardListItem {
    orderIndex?: number | null;
    boardList?: BoardList | null;
}
