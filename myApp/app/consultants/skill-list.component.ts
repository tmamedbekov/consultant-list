import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IConsultant } from './consultant'
import { ConsultantFilterPipe } from './consultant-filter.pipe';
import { ConsultantService } from './consultant.service';

@Component({
    templateUrl: 'app/consultants/skill-list.component.html',
    pipes: [ConsultantFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class SkillListComponent implements OnInit {
    pageTitle: string = 'Skill List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    consultants: IConsultant[];
    
    
    constructor (private _consultantService: ConsultantService){
        
    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    
    ngOnInit(): void {
        this._consultantService.getConsultants()
        .subscribe(
            consultants => this.consultants = consultants,
            error => this.errorMessage = <any>error);
    }
}