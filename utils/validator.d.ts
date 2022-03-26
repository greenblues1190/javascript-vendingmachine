interface Condition {
    test: Function;
    errorMessage: string;
}
declare type Validator = Array<Condition>;
export declare const validate: (validator: Validator, ...target: any) => void;
export declare const itemValidator: Validator;
export declare const updatedItemValidator: Validator;
export declare const removedItemValidator: Validator;
export declare const amountValidator: Array<Condition>;
export {};
