import { State, NgxsOnInit, StateContext, Action } from '@ngxs/store';
import { Login, LogOut } from './auth.action';
import { AuthService } from '../service/auth.service';



export interface AuthStateModel {
    authStatus: boolean;
    user: any;
    user_type: string;
    authError: string;
    token: string;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        authStatus: false,
        user: '',
        user_type: '',
        authError: '',
        token: ''
    }
})

export class AuthState  {
    constructor(private authService: AuthService) {}


    // login action
    @Action(Login)
    async login({patchState, getState}: StateContext<AuthStateModel>, action: Login) {
        const {email, password} = action;
        const state = getState();
        return await this.authService.EmailLogin(email, password).then(
            (userCred) => {
                this.authService.getToken().then(
                   (token) => {
                    patchState({
                        ...state,
                        token: token,
                        authStatus: true,
                        authError: '',
                        user: userCred
                    });
                   }
               );
            }
        ).catch(
            err => {
                const {message, rest} = err;
                patchState({
                    ...state,
                    authError: message
                });
            }
        );
    }

    // logout
    @Action(LogOut)
    logOut({patchState, getState}: StateContext<AuthStateModel>) {
        const state = getState();
        patchState({
            ...state,
            user: '',
            user_type: '',
            authError: ''
        });
    }
}
