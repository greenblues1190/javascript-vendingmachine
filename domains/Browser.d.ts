import Domain from '../core/Domain';
export interface BrowserState {
    location: string;
}
export default class Browser extends Domain<BrowserState> {
    setLocation(location: string): void;
}
export declare const browser: Browser;
