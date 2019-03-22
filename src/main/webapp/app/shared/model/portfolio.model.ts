import { Moment } from 'moment';

export interface IPortfolio {
    id?: number;
    symbol?: string;
    shares?: string;
    price?: number;
}

export class Portfolio implements IPortfolio {
    constructor(
        public id?: number,
        public title?: string,
        public shares?: string,
        public price?: number
    ) {}
}
