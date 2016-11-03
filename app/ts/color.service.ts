import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ColorService {
  private colorsUrl = 'app/colors.json';

  constructor(private http: Http) { }

  getColors(): Promise<Array<string>> {
    return this.http.get(this.colorsUrl)
                    .toPromise()
                    .then(response => response.json().colors as Array<string>)
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
