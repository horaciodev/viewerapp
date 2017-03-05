import { Injectable } from '@angular/core';
import { IErrorVM } from './errorVM';

import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ErrorReaderService {

  constructor(private _http: Http) {  }

  private _errorAPIUrl: string = "http://192.168.1.17:9002/api/errors";

  getErrors(): Observable<IErrorVM[]>{
    return this._http.get(this._errorAPIUrl)
          .map((res: Response) => <IErrorVM[]>res.json())
          .do(data=> console.log('All:' + JSON.stringify(data)))
          .catch(this.handleException);
  }

  private handleException(error: Response){
    console.log(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
