import Domain from '../core/Domain';
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
interface VendingMachineState {
    items: Item[];
    coins: Coins;
    insertedMoney: number;
    returnedChange: Coins;
}
export default class VendingMachine extends Domain<VendingMachineState> {
    addItem(item: Item): void;
    updateItem(name: string, updatedItem: Item): void;
    removeItem(name: string): void;
    purchaseItem(name: string): void;
    findItem(name: string): Item | null;
    addCoin(amount: number): void;
    getTotalMoney(): number;
    insertMoney(amount: number): void;
    returnChange(): void;
}
export declare const vendingMachine: VendingMachine;
export {};
