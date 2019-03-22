import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, AccountService, Account } from 'app/core';
import {Book} from 'app/shared/model/book.model';

import { BookService } from '../entities/book';
import { PortfolioService } from '../entities/portfolio';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import {Portfolio} from 'app/shared/model/portfolio.model';
import {BarchartComponent} from "app/dashboard/barchart";

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

    data: any;

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

    getData(){
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
    }

    isAuthenticated() {
        return this.accountService.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    loadAll() {

        this.getData();

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
