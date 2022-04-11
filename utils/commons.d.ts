export declare const deepEqual: (a: any, b: any) => boolean;
export declare const deepClone: <T>(obj: T) => T;
export declare const convertStringToBoolean: (str: string) => boolean | null;
interface CallbackFunction<T extends unknown[]> {
    (...args: T): void;
}
export declare const throttle: <P extends unknown[]>(callback: CallbackFunction<P>, delay?: number) => (...args: P) => void;
export declare const debounce: <P extends unknown[]>(callback: CallbackFunction<P>, wait?: number) => (...args: P) => void;
export {};
