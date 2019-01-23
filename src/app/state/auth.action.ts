// auth state actions


export class Login {
    static readonly type = '[auth login]';
    constructor (public email: string, public password: string) {}
}

export class LogOut {
    static readonly type = '[auth logout]';
}
