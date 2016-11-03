import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Quote } from './quote';

@Injectable()
export class QuoteService {

  private quotesUrl = 'app/quotes.json';

  constructor(private http: Http) { }

  getQuotes(): Promise<Quote[]> {
    return this.http.get(this.quotesUrl)
                    .toPromise()
                    .then(response => response.json().data as Quote[])
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
