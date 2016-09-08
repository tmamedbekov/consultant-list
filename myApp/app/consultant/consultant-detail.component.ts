import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteParams, Router } from 'angular2/router';

import { IConsultant } from './consultant'
// import { ConsultantFilterPipe } from './consultant-filter.pipe';
import { ConsultantService } from './consultant.service';

@Component({
    templateUrl: 'app/consultant/consultant-detail.component.html',
    // pipes: [ConsultantFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})

export class ConsultantDetailComponent implements OnInit {
    pageTitle: string = 'Consultant Details';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    
    consultant: IConsultant[];
    

    constructor (private _consultantService: ConsultantService,
                 private _routeParams: RouteParams,
                 private _router: Router){
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }
    onBack(): void {
        this._router.navigate(['Consultants']);
    }
    ngOnInit(): void {
        this._consultantService.getConsultant()
        .subscribe(
            consultant => this.consultant = consultant,
            error => this.errorMessage = <any>error);
    }
}