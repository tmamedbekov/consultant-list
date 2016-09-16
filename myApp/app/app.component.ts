import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router'; 

import { ConsultantListComponent } from './consultants/consultant-list.component';
import { AtoListComponent } from './consultants/ato-list.component';
import { SkillListComponent } from './consultants/skill-list.component';
import { ConsultantService } from './consultants/consultant.service';
import { WelcomeComponent } from './home/welcome.component';
import { ConsultantDetailComponent } from './consultants/consultant-detail.component';

@Component({
    selector: 'consultant-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
            <a class='navbar-brand'>{{pageTitle}}</a>
            <ul class='nav navbar-nav'>
                <li><a [routerLink]="['Home']">Home</a></li>
                <li><a [routerLink]="['Consultants']">Consultants</a></li>
                <li><a [routerLink]="['ATO']">ATO</a></li>
                <li><a [routerLink]="['Skills']">Skills</a></li>
            </ul>
            </div>
        </nav>
        <div class='container'>
        <router-outlet></router-outlet>
        </div>
    </div>
    ` ,
    directives: [ROUTER_DIRECTIVES],
    providers: [ConsultantService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: WelcomeComponent, useAsDefault: true },
    { path: '/consultants', name: 'Consultants', component:ConsultantListComponent },
    { path: '/consultant/:id', name: 'ConsultantDetail', component:ConsultantDetailComponent },
    { path: '/ato', name: 'ATO', component:AtoListComponent },
    { path: '/skills', name: 'Skills', component:SkillListComponent }
])
export class AppComponent {
    pageTitle: string = 'Sogeti';
}