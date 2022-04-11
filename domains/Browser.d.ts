import Domain from '../core/Domain';
interface BrowserState {
    location: string;
}
declare class Browser extends Domain<BrowserState> {
    setLocation(location: string): void;
}
export declare const browser: Browser;
export {};
