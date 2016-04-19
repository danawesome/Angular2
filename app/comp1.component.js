System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Comp1Component;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Comp1Component = (function () {
                function Comp1Component(_loggingService) {
                    this._loggingService = _loggingService;
                }
                Comp1Component.prototype.onLog = function (message) {
                    this._loggingService.log(message);
                };
                Comp1Component = __decorate([
                    core_1.Component({
                        selector: 'comp1',
                        template: "\n          <input type=\"text\" #message>\n    <button (click)=\"onLog(message.vale)\"></button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [Object])
                ], Comp1Component);
                return Comp1Component;
            }());
            exports_1("Comp1Component", Comp1Component);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXAxLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUNBLHdCQUFvQixlQUFnQztvQkFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO2dCQUFFLENBQUM7Z0JBRXZELDhCQUFLLEdBQUwsVUFBTSxPQUFjO29CQUNoQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEMsQ0FBQztnQkFiTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixRQUFRLEVBQUUseUdBR1Q7cUJBRUosQ0FBQzs7a0NBQUE7Z0JBT0YscUJBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDJDQU1DLENBQUEiLCJmaWxlIjoiY29tcDEuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0xvZ2dpbmdTZXJpdmV9IGZyb20gJy4vc2VydmljZXMvbG9nZ2luZy5zZXJ2aWNlLnRzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY29tcDEnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNtZXNzYWdlPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25Mb2cobWVzc2FnZS52YWxlKVwiPjwvYnV0dG9uPlxyXG4gICAgYCxcclxuICAgIC8vZGlyZWN0aXZlczpbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcDFDb21wb25lbnQge1xyXG5jb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2dnaW5nU2VydmljZTogX0xvZ2dpbmdTZXJ2aWNlKXt9XHJcbiAgICBcclxub25Mb2cobWVzc2FnZTpzdHJpbmcpe1xyXG4gICAgdGhpcy5fbG9nZ2luZ1NlcnZpY2UubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
