export declare const CHARGE_AMOUNT: {
    readonly LABEL: "충전 금액";
    readonly MIN: 10;
    readonly MAX: 100000;
    readonly STEP: 10;
};
export declare const ITEM: {
    readonly NAME: {
        readonly LABEL: "상품명";
        readonly LENGTH: {
            readonly MIN: 1;
            readonly MAX: 10;
        };
    };
    readonly PRICE: {
        readonly LABEL: "가격";
        readonly MIN: 100;
        readonly MAX: 10000;
        readonly STEP: 10;
    };
    readonly QUANTITY: {
        readonly LABEL: "수량";
        readonly MIN: 1;
        readonly MAX: 20;
    };
};
export declare const COIN: {
    readonly VALUES: readonly [10, 50, 100, 500];
    readonly EMPTY_COINS: {
        readonly 10: 0;
        readonly 50: 0;
        readonly 100: 0;
        readonly 500: 0;
    };
};
export declare const USER: {
    readonly EMAIL: {
        readonly LENGTH: {
            readonly MAX: 40;
        };
    };
    readonly NAME: {
        readonly LENGTH: {
            readonly MIN: 2;
            readonly MAX: 6;
        };
    };
    readonly PASSWORD: {
        readonly LENGTH: {
            readonly MIN: 8;
            readonly MAX: 30;
        };
    };
};
export declare const PAGES: {
    readonly LANDING: {
        readonly TITLE: "";
        readonly PATH: "/" | "/javascript-vendingmachine/";
    };
    readonly ITEM_MANAGEMENT: {
        readonly TITLE: "상품 관리";
        readonly PATH: "/item-management" | "/javascript-vendingmachine/item-management";
    };
    readonly CHANGE_CHARGE: {
        readonly TITLE: "잔돈 충전";
        readonly PATH: "/change-charge" | "/javascript-vendingmachine/change-charge";
    };
    readonly ITEM_PURCHASE: {
        readonly TITLE: "상품 구매";
        readonly PATH: "/item-purchase" | "/javascript-vendingmachine/item-purchase";
    };
    readonly LOGIN: {
        readonly PATH: "/login" | "/javascript-vendingmachine/login";
    };
    readonly SIGNUP: {
        readonly PATH: "/signup" | "/javascript-vendingmachine/signup";
    };
    readonly PROFILE: {
        readonly PATH: "/profile" | "/javascript-vendingmachine/profile";
    };
    readonly DEFAULT: {
        readonly TITLE: "";
        readonly PATH: "/*" | "/javascript-vendingmachine/*";
    };
};
export declare const REDICTION: {
    readonly LANDING: "landing";
    readonly LOGIN: "login";
    readonly AUTHORIZED: "authorized";
};
