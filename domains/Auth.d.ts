import Domain from '../core/Domain';
declare type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};
declare type SignupInfo = Omit<User, 'id'>;
declare type LoginInfo = Omit<User, 'id' | 'name'>;
declare type UserBody = {
    accessToken: string;
    user: Partial<User>;
};
declare type AuthState = {
    [K in keyof UserBody]: UserBody[K] | null;
};
declare class Auth extends Domain<AuthState> {
    signup(newUser: SignupInfo): Promise<void>;
    login(loginInfo: LoginInfo): Promise<void>;
    logout(): void;
    updateProfile(updatedProfile: Partial<SignupInfo>): Promise<void>;
    authRoute(loginRequired: boolean | null): "landing" | "login" | "authorized";
}
export declare const auth: Auth;
export {};
