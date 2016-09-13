import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { IConsultant } from './consultant'
import { ConsultantService } from './consultant.service';

@Component({
    templateUrl: 'app/consultants/consultant-detail.component.html'
})

export class ConsultantDetailComponent implements OnInit {
    pageTitle: string = 'Consultant Details';
    consultant: IConsultant;
    errorMessage: string;
    
    constructor (private _consultantService: ConsultantService,
                 private _routeParams: RouteParams,
                 private _router: Router) {
    }
    
    ngOnInit() {
        if (!this.consultant) {
            let id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getConsultant(id);
        }
    }
    
    getConsultant(id: number) {
        this._consultantService.getConsultant(id)
        .subscribe(
            consultant => this.consultant = consultant,
            error => this.errorMessage = <any>error);
    }
    
    onBack(): void {
        this._router.navigate(['Consultants']);
    }
}