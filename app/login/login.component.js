"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var application_1 = require("tns-core-modules/application");
var LoginComponent = (function () {
    function LoginComponent(page, router) {
        this.page = page;
        this.router = router;
        console.log("constructing login");
        this.page = page;
        this.page.on("navigatingTo", this.onNavigatingTo.bind(this));
        this.page.on("navigatedTo", this.onNavigatedTo.bind(this));
        this.page.on("navigatingFrom", this.onNavigatingFrom.bind(this));
        this.page.on("navigatedFrom", this.onNavigatedFrom.bind(this));
        application_1.on(application_1.suspendEvent, this.onPause.bind(this));
        application_1.on(application_1.resumeEvent, this.onResume.bind(this));
        application_1.on(application_1.launchEvent, this.onStart.bind(this));
        application_1.on(application_1.exitEvent, this.onStop.bind(this));
        page.actionBarHidden = true;
        console.log("page is loaded", page.isLoaded);
    }
    LoginComponent.prototype.printStackClass = function () {
        console.log("StackLayout has class: ", this.stacklayout.nativeElement.className);
    };
    LoginComponent.prototype.printLabelClass = function () {
        console.log("Label has class: ", this.label.nativeElement.className);
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    LoginComponent.prototype.login = function () {
    };
    LoginComponent.prototype.loginFacebook = function () {
    };
    LoginComponent.prototype.register = function () {
        console.log("register");
        this.router.navigate(["/register"]);
    };
    LoginComponent.prototype.onNavigatingTo = function (arg) {
        console.log("onNavigatingTo");
    };
    LoginComponent.prototype.onNavigatedTo = function (arg) {
        console.log("onNavigatedTo");
    };
    LoginComponent.prototype.onNavigatingFrom = function (arg) {
        console.log("onNavigatingFrom");
    };
    LoginComponent.prototype.onNavigatedFrom = function (arg) {
        console.log("onNavigatedFrom");
    };
    LoginComponent.prototype.onPause = function (arg) {
        console.log("lifecycle onPause");
    };
    LoginComponent.prototype.onResume = function (arg) {
        console.log("lifecycle onResume");
    };
    LoginComponent.prototype.onStart = function (arg) {
        console.log("lifecycle onStart");
    };
    LoginComponent.prototype.onStop = function (arg) {
        console.log("lifecycle onStop");
    };
    __decorate([
        core_1.ViewChild("stacklayout"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "stacklayout", void 0);
    __decorate([
        core_1.ViewChild("label"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "label", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-login",
            templateUrl: "login.component.html",
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBRXhGLHNEQUErRDtBQUMvRCxnQ0FBOEM7QUFDOUMsNERBQTBIO0FBVTFIO0lBS0Usd0JBQTJCLElBQVUsRUFBVSxNQUF3QjtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRCxnQkFBRSxDQUFDLDBCQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQyxnQkFBRSxDQUFDLHlCQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQyxnQkFBRSxDQUFDLHlCQUFXLEVB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IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQXBwbGljYXRpb25FdmVudERhdGEsIGV4aXRFdmVudCwgbGF1bmNoRXZlbnQsIG9uLCByZXN1bWVFdmVudCwgc3VzcGVuZEV2ZW50fSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJucy1sb2dpblwiLFxuICB0ZW1wbGF0ZVVybDogXCJsb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQFZpZXdDaGlsZChcInN0YWNrbGF5b3V0XCIpIHN0YWNrbGF5b3V0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibGFiZWxcIikgbGFiZWw6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICBjb25zb2xlLmxvZyhcImNvbnN0cnVjdGluZyBsb2dpblwiKVxuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5wYWdlLm9uKFwibmF2aWdhdGluZ1RvXCIsIHRoaXMub25OYXZpZ2F0aW5nVG8uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wYWdlLm9uKFwibmF2aWdhdGVkVG9cIiwgdGhpcy5vbk5hdmlnYXRlZFRvLmJpbmQodGhpcykpO1xuICAgIHRoaXMucGFnZS5vbihcIm5hdmlnYXRpbmdGcm9tXCIsIHRoaXMub25OYXZpZ2F0aW5nRnJvbS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnBhZ2Uub24oXCJuYXZpZ2F0ZWRGcm9tXCIsIHRoaXMub25OYXZpZ2F0ZWRGcm9tLmJpbmQodGhpcykpO1xuICAgIG9uKHN1c3BlbmRFdmVudCwgdGhpcy5vblBhdXNlLmJpbmQodGhpcykpO1xuICAgIG9uKHJlc3VtZUV2ZW50LCB0aGlzLm9uUmVzdW1lLmJpbmQodGhpcykpO1xuICAgIG9uKGxhdW5jaEV2ZW50LCB0aGlzLm9uU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgb24oZXhpdEV2ZW50LCB0aGlzLm9uU3RvcC5iaW5kKHRoaXMpKTtcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJwYWdlIGlzIGxvYWRlZFwiLCBwYWdlLmlzTG9hZGVkKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmludFN0YWNrQ2xhc3MoKSB7XG4gICAgY29uc29sZS5sb2coXCJTdGFja0xheW91dCBoYXMgY2xhc3M6IFwiLCB0aGlzLnN0YWNrbGF5b3V0Lm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lKVxuICB9XG5cbiAgcHVibGljIHByaW50TGFiZWxDbGFzcygpIHtcbiAgICBjb25zb2xlLmxvZyhcIkxhYmVsIGhhcyBjbGFzczogXCIsIHRoaXMubGFiZWwubmF0aXZlRWxlbWVudC5jbGFzc05hbWUpXG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJuZ09uSW5pdFwiKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJuZ0FmdGVyVmlld0luaXRcIik7XG4gIH1cblxuICBwdWJsaWMgbG9naW4oKSB7XG4gIH1cblxuICBwdWJsaWMgbG9naW5GYWNlYm9vaygpIHtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlcigpIHtcbiAgICBjb25zb2xlLmxvZyhcInJlZ2lzdGVyXCIpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZWdpc3RlclwiXSlcbiAgfVxuXG4gIHByb3RlY3RlZCBvbk5hdmlnYXRpbmdUbyhhcmc/OiBOYXZpZ2F0ZWREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uTmF2aWdhdGluZ1RvXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTmF2aWdhdGVkVG8oYXJnPzogTmF2aWdhdGVkRGF0YSk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRlZFRvXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTmF2aWdhdGluZ0Zyb20oYXJnPzogTmF2aWdhdGVkRGF0YSk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRpbmdGcm9tXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTmF2aWdhdGVkRnJvbShhcmc/OiBOYXZpZ2F0ZWREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uTmF2aWdhdGVkRnJvbVwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblBhdXNlKGFyZz86IEFwcGxpY2F0aW9uRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcImxpZmVjeWNsZSBvblBhdXNlXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uUmVzdW1lKGFyZz86IEFwcGxpY2F0aW9uRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcImxpZmVjeWNsZSBvblJlc3VtZVwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblN0YXJ0KGFyZz86IEFwcGxpY2F0aW9uRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcImxpZmVjeWNsZSBvblN0YXJ0XCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU3RvcChhcmc/OiBBcHBsaWNhdGlvbkV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coXCJsaWZlY3ljbGUgb25TdG9wXCIpO1xuICB9XG59Il19