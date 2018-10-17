System.register(['angular2/core', 'angular2/router', './consultant.service'], function(exports_1, context_1) {
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
    var core_1, router_1, consultant_service_1;
    var ConsultantDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (consultant_service_1_1) {
                consultant_service_1 = consultant_service_1_1;
            }],
        execute: function() {
            // import { ActivatedRoute } from 'angular2/router';
            ConsultantDetailComponent = (function () {
                function ConsultantDetailComponent(_consultantService, _routeParams, _router, _route) {
                    this._consultantService = _consultantService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._route = _route;
                    this.pageTitle = 'Consultant Details';
                }
                ConsultantDetailComponent.prototype.ngOnInit = function () {
                    if (!this.consultant) {
                        var id = +this._routeParams.get('id');
                        // this.pageTitle += `: ${id}`;
                        this.getConsultant(id);
                    }
                };
                ConsultantDetailComponent.prototype.getConsultant = function (id) {
                    var _this = this;
                    this._consultantService.getConsultant(id)
                        .subscribe(function (consultant) { return _this.consultant = consultant; }, function (error) { return _this.errorMessage = error; });
                };
                ConsultantDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['Consultants']);
                };
                ConsultantDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/consultants/consultant-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [consultant_service_1.ConsultantService, router_1.RouteParams, router_1.Router, router_1.RouteParams])
                ], ConsultantDetailComponent);
                return ConsultantDetailComponent;
            }());
            exports_1("ConsultantDetailComponent", ConsultantDetailComponent);
        }
    }
});
//# sourceMappingURL=consultant-detail.component.js.map