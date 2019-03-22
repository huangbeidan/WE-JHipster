import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, AccountService, Account } from 'app/core';
import {Book} from 'app/shared/model/book.model';

import { BookService } from '../entities/book';
import { PortfolioService } from '../entities/portfolio';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import {Portfolio} from 'app/shared/model/portfolio.model';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;

    books: Book[] = [];
    portfolios: Portfolio[] = [];

    constructor(
        private accountService: AccountService,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private bookService: BookService,
        protected httpClient: HttpClient,
        private portfolioService: PortfolioService

    ) {}

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.accountService.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    loadAll() {

        this.bookService.query().subscribe(
            (res: HttpResponse<Book[]>) => {
                this.books = res.body;
            },
            error => {
                console.log(error);
            }
        );

        this.portfolioService.query().subscribe(
            (res: HttpResponse<Portfolio[]>) => {
                this.portfolios = res.body;
            },
            error => {
                console.log(error);
            }
        );
    }

    ngOnInit() {
        this.accountService.identity().then((account: Account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.loadAll();
    }
}
