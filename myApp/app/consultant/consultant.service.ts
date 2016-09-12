import { Injectable } from 'angular2/core';
import { IConsultant } from './consultant';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultantService {
    private _consultantUrl = 'api/consultant/consultant1.json';
    
    constructor(private _http: Http) {}
    
    getConsultant(): Observable<IConsultant[]> {
        return this._http.get(this._consultantUrl)
            .map((response: Response) => <IConsultant[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}