import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhiLanguageService } from 'ng-jhipster';
import { JhiLanguageHelper } from 'app/core';

import { WePortfolioSharedModule } from 'app/shared';
import {
    PortfolioComponent,
    PortfolioDetailComponent,
    PortfolioUpdateComponent,
    PortfolioDeletePopupComponent,
    PortfolioDeleteDialogComponent,
    portfolioRoute,
    portfolioPopupRoute
} from './';

const ENTITY_STATES = [...portfolioRoute, ...portfolioPopupRoute];

@NgModule({
    imports: [WePortfolioSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [PortfolioComponent, PortfolioDetailComponent, PortfolioUpdateComponent, PortfolioDeletePopupComponent, PortfolioDeleteDialogComponent],
    entryComponents: [PortfolioComponent, PortfolioUpdateComponent, PortfolioDeleteDialogComponent, PortfolioDeletePopupComponent],
    providers: [{ provide: JhiLanguageService, useClass: JhiLanguageService }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WePortfolioPortfolioModule {
    constructor(private languageService: JhiLanguageService, private languageHelper: JhiLanguageHelper) {
        this.languageHelper.language.subscribe((languageKey: string) => {
            if (languageKey !== undefined) {
                this.languageService.changeLanguage(languageKey);
            }
        });
    }
}
