export interface Item {
    name: string;
    price: number;
    quantity: number;
}
export interface Coins {
    10: number;
    50: number;
    100: number;
    500: number;
}
export interface VendingMachineState {
    items: Item[];
    coins: Coins;
    location: string;
}
export default class VendingMachine {
    state: VendingMachineState;
    constructor(items: Item[], coins: Coins, location?: string);
    useStore(callback: Function): any;
    addItem(item: Item): void;
    updateItem(name: string, updatedItem: Item): void;
    removeItem(name: string): void;
    findItem(name: string): Item | null;
    addCoin(amount: number): void;
    getTotalMoney(): number;
    setLocation(location: any): void;
}
export declare const vendingMachine: VendingMachine;
