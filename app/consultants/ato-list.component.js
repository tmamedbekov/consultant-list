System.register(['angular2/core', 'angular2/router', './consultant-filter.pipe', './consultant.service'], function(exports_1, context_1) {
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
    var core_1, router_1, consultant_filter_pipe_1, consultant_service_1;
    var AtoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (consultant_filter_pipe_1_1) {
                consultant_filter_pipe_1 = consultant_filter_pipe_1_1;
            },
            function (consultant_service_1_1) {
                consultant_service_1 = consultant_service_1_1;
            }],
        execute: function() {
            AtoListComponent = (function () {
                function AtoListComponent(_consultantService) {
                    this._consultantService = _consultantService;
                    this.pageTitle = 'ATO List';
                    this.imageWidth = 50;
                    this.imageMargin = 2;
                    this.showImage = false;
                }
                AtoListComponent.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                AtoListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._consultantService.getConsultants()
                        .subscribe(function (consultants) { return _this.consultants = consultants; }, function (error) { return _this.errorMessage = error; });
                };
                AtoListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/consultants/ato-list.component.html',
                        pipes: [consultant_filter_pipe_1.ConsultantFilterPipe],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [consultant_service_1.ConsultantService])
                ], AtoListComponent);
                return AtoListComponent;
            }());
            exports_1("AtoListComponent", AtoListComponent);
        }
    }
});
//# sourceMappingURL=ato-list.component.js.map