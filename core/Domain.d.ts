interface State {
    [key: string]: any;
}
export default class Domain<T extends State> {
    state: T;
    constructor(initialState: T);
    useStore(callback: (state: T) => Partial<T>): Partial<T>;
}
export {};
