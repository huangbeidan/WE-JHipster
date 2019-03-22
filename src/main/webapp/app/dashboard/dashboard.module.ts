import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WePortfolioBarchartModule } from './barchart/barchart.module';
import { WePortfolioDoughnutchartModule } from './doughnutchart/doughnutchart.module';
import { WePortfolioLinechartModule } from './linechart/linechart.module';
import { WePortfolioPiechartModule } from './piechart/piechart.module';
import { WePortfolioPolarareachartModule } from './polarareachart/polarareachart.module';
import { WePortfolioRadarchartModule } from './radarchart/radarchart.module';

@NgModule({
    imports: [
        WePortfolioBarchartModule,
        WePortfolioDoughnutchartModule,
        WePortfolioLinechartModule,
        WePortfolioPiechartModule,
        WePortfolioPolarareachartModule,
        WePortfolioRadarchartModule,
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WePortfolioDashboardModule {}
