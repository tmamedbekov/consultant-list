System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './consultants/consultant-list.component', './consultants/ato-list.component', './consultants/skill-list.component', './consultants/consultant.service', './home/welcome.component', './consultants/consultant-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, consultant_list_component_1, ato_list_component_1, skill_list_component_1, consultant_service_1, welcome_component_1, consultant_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (consultant_list_component_1_1) {
                consultant_list_component_1 = consultant_list_component_1_1;
            },
            function (ato_list_component_1_1) {
                ato_list_component_1 = ato_list_component_1_1;
            },
            function (skill_list_component_1_1) {
                skill_list_component_1 = skill_list_component_1_1;
            },
            function (consultant_service_1_1) {
                consultant_service_1 = consultant_service_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (consultant_detail_component_1_1) {
                consultant_detail_component_1 = consultant_detail_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = 'Sogeti';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'consultant-app',
                        template: "\n    <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n            <a class='navbar-brand'>{{pageTitle}}</a>\n            <ul class='nav navbar-nav'>\n                <li><a [routerLink]=\"['Home']\">Home</a></li>\n                <li><a [routerLink]=\"['Consultants']\">Consultants</a></li>\n                <li><a [routerLink]=\"['ATO']\">ATO</a></li>\n                <li><a [routerLink]=\"['Skills']\">Skills</a></li>\n            </ul>\n            </div>\n        </nav>\n        <div class='container'>\n        <router-outlet></router-outlet>\n        </div>\n    </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [consultant_service_1.ConsultantService,
                            http_1.HTTP_PROVIDERS,
                            router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/consultants', name: 'Consultants', component: consultant_list_component_1.ConsultantListComponent },
                        { path: '/consultant/:id', name: 'ConsultantDetail', component: consultant_detail_component_1.ConsultantDetailComponent },
                        { path: '/ato', name: 'ATO', component: ato_list_component_1.AtoListComponent },
                        { path: '/skills', name: 'Skills', component: skill_list_component_1.SkillListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map