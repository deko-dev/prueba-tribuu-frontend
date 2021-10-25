export interface CountryInfo {
    name: Name;
    cca2: string;
    currencies: {
        code:{
            name: string;
            symbol: string;
        }
    };
    idd: Idd;
}

interface Idd {
    root: string;
    suffixes: string[];
}

interface Name {
    common: string;
}