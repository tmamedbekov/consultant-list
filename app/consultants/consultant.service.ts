import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IConsultant } from './consultant';

@Injectable()
export class ConsultantService {
    private _consultantUrl = 'api/consultants/consultant1.json';
    
    constructor(private _http: Http) {}
    
    getConsultants(): Observable<IConsultant[]> {
        return this._http.get(this._consultantUrl)
            .map((response: Response) => <IConsultant[]> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    getConsultant(id: number): Observable<IConsultant> {
        return this._http.get(this._consultantUrl)
            .map((response: Response) => <IConsultant> response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    // getConsultant(id: number): Observable<IConsultant> {
    //     return this._http.get(this._consultantUrl)
    //         .map((response: Response) => <IConsultant> response.json())
    //         .do(data => console.log('All: ' + JSON.stringify(data)))
    //         .catch(this.handleError);
    // }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}