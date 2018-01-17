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
    }
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
        // this.router.navigate(["/register"], { clearHistory: true })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdGO0FBRXhGLHNEQUErRDtBQUMvRCxnQ0FBOEM7QUFDOUMsNERBQTBIO0FBVTFIO0lBRUUsd0JBQTJCLElBQVUsRUFBVSxNQUF3QjtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRCxnQkFBRSxDQUFDLDBCQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQyxnQkFBRSxDQUFDLHlCQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxQyxnQkFBRSxDQUFDLHlCQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6QyxnQkFBRSxDQUFDLHVCQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU0saUNBQVEsR0FBZjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSw4QkFBSyxHQUFaO0lBQ0EsQ0FBQztJQUVNLHNDQUFhLEdBQXBCO0lBQ0EsQ0FBQztJQUVNLGlDQUFRLEdBQWY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUNuQyw4REFBOEQ7SUFDaEUsQ0FBQztJQUVTLHVDQUFjLEdBQXhCLFVBQXlCLEdBQW1CO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRVMsc0NBQWEsR0FBdkIsVUFBd0IsR0FBbUI7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRVMseUNBQWdCLEdBQTFCLFVBQTJCLEdBQW1CO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRVMsd0NBQWUsR0FBekIsVUFBMEIsR0FBbUI7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFUyxnQ0FBTyxHQUFqQixVQUFrQixHQUEwQjtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVTLGlDQUFRLEdBQWxCLFVBQW1CLEdBQTBCO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVMsZ0NBQU8sR0FBakIsVUFBa0IsR0FBMEI7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFUywrQkFBTSxHQUFoQixVQUFpQixHQUEwQjtRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQWxFVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUlpQyxXQUFJLEVBQWtCLHlCQUFnQjtPQUY1RCxjQUFjLENBbUUxQjtJQUFELHFCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50RGF0YSwgZXhpdEV2ZW50LCBsYXVuY2hFdmVudCwgb24sIHJlc3VtZUV2ZW50LCBzdXNwZW5kRXZlbnR9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcIm5zLWxvZ2luXCIsXG4gIHRlbXBsYXRlVXJsOiBcImxvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIGNvbnNvbGUubG9nKFwiY29uc3RydWN0aW5nIGxvZ2luXCIpXG4gICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICB0aGlzLnBhZ2Uub24oXCJuYXZpZ2F0aW5nVG9cIiwgdGhpcy5vbk5hdmlnYXRpbmdUby5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnBhZ2Uub24oXCJuYXZpZ2F0ZWRUb1wiLCB0aGlzLm9uTmF2aWdhdGVkVG8uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5wYWdlLm9uKFwibmF2aWdhdGluZ0Zyb21cIiwgdGhpcy5vbk5hdmlnYXRpbmdGcm9tLmJpbmQodGhpcykpO1xuICAgIHRoaXMucGFnZS5vbihcIm5hdmlnYXRlZEZyb21cIiwgdGhpcy5vbk5hdmlnYXRlZEZyb20uYmluZCh0aGlzKSk7XG4gICAgb24oc3VzcGVuZEV2ZW50LCB0aGlzLm9uUGF1c2UuYmluZCh0aGlzKSk7XG4gICAgb24ocmVzdW1lRXZlbnQsIHRoaXMub25SZXN1bWUuYmluZCh0aGlzKSk7XG4gICAgb24obGF1bmNoRXZlbnQsIHRoaXMub25TdGFydC5iaW5kKHRoaXMpKTtcbiAgICBvbihleGl0RXZlbnQsIHRoaXMub25TdG9wLmJpbmQodGhpcykpO1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0XCIpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5nQWZ0ZXJWaWV3SW5pdFwiKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbigpIHtcbiAgfVxuXG4gIHB1YmxpYyBsb2dpbkZhY2Vib29rKCkge1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXJcIik7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JlZ2lzdGVyXCJdKVxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZWdpc3RlclwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgfVxuXG4gIHByb3RlY3RlZCBvbk5hdmlnYXRpbmdUbyhhcmc/OiBOYXZpZ2F0ZWREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uTmF2aWdhdGluZ1RvXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTmF2aWdhdGVkVG8oYXJnPzogTmF2aWdhdGVkRGF0YSk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRlZFRvXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTmF2aWdhdGluZ0Zyb20oYXJnPzogTmF2aWdhdGVkRGF0YSk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRpbmdGcm9tXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uTmF2aWdhdGVkRnJvbShhcmc/OiBOYXZpZ2F0ZWREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcIm9uTmF2aWdhdGVkRnJvbVwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblBhdXNlKGFyZz86IEFwcGxpY2F0aW9uRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcImxpZmVjeWNsZSBvblBhdXNlXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uUmVzdW1lKGFyZz86IEFwcGxpY2F0aW9uRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcImxpZmVjeWNsZSBvblJlc3VtZVwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvblN0YXJ0KGFyZz86IEFwcGxpY2F0aW9uRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhcImxpZmVjeWNsZSBvblN0YXJ0XCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uU3RvcChhcmc/OiBBcHBsaWNhdGlvbkV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coXCJsaWZlY3ljbGUgb25TdG9wXCIpO1xuICB9XG59Il19