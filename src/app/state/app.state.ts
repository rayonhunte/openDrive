import { State, NgxsOnInit, StateContext } from '@ngxs/store';

@State({
    name: 'app'
})

export class AppState implements NgxsOnInit {
    constructor() {}

    ngxsOnInit(ctx: StateContext<any>) {

    }
}
