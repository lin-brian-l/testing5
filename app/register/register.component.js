"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var common_1 = require("@angular/common");
var page_1 = require("ui/page");
// var config = require("../../shared/config")
var dialogsModule = require("ui/dialogs");
// var fetchModule = require("fetch")
// var validator = require("email-validator")
var RegisterComponent = (function () {
    function RegisterComponent(page, location, router) {
        this.page = page;
        this.location = location;
        this.router = router;
        this.input = {
            "firstName": "asdf",
            "lastName": "asdf",
            "email": "asdf@asdf.com",
            "password": "asdfas1A",
            "passwordConfirm": "asdfas1A"
        };
        page.actionBarHidden = true;
    }
    RegisterComponent.prototype.register = function () {
        var that = this;
        // if (validateRegistration(this.input)) {
        //   registrationCall(this.input).catch(function(error) {
        //     console.log(error);
        //     dialogsModule.alert({
        //       message: "Sorry, something went wrong.",
        //       okButtonText: "OK"
        //     });
        //   }).then(function(response) {
        //     if (response.status === "error") {
        //       dialogsModule.alert({
        //         message: response.error,
        //         okButtonText: "OK"
        //       });
        //     } else {
        //       dialogsModule.alert({
        //         message: "Registration successful! Please log in.",
        //         okButtonText: "OK"
        //       }).then(function() {
        //         that.location.back();
        //       })
        //     };
        //   })
        // }
    };
    RegisterComponent.prototype.back = function () {
        this.router.navigate(["/login"]);
        // this.router.navigate(["/login"], { clearHistory: true })
    };
    RegisterComponent.prototype.setTextFieldHeight = function (args) {
        // let registerButton = <Button>args.object;
        // setTimeout(function() {
        //   this.textFieldHeight = (registerButton.getMeasuredHeight() / config.scale).toString();
        // }.bind(this), 200);
    };
    RegisterComponent.prototype.positionLabel = function () {
        // setTimeout(function() {
        //   this.labelLeft = ( ( config.widthDIPs - (this.label.nativeElement.getMeasuredWidth() / config.scale) ) / 2).toString();
        //   this.labelTop = ( ( (this.abs.nativeElement.getMeasuredHeight() - this.label.nativeElement.getMeasuredHeight()) / config.scale) - 3 ).toString();
        // }.bind(this), 1);
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    __decorate([
        core_1.ViewChild('abs'),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "abs", void 0);
    __decorate([
        core_1.ViewChild("label"),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "label", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-register",
            templateUrl: "register.component.html",
            styleUrls: ["register.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, common_1.Location, router_1.RouterExtensions])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
// function validateRegistration(input) {
//   if (!input.firstName) {
//     dialogsModule.alert({
//       message: "First name cannot be blank.",
//       okButtonText: "OK"
//     })
//     return false
//   } else if (!input.lastName) {
//     dialogsModule.alert({
//       message: "Last name cannot be blank.",
//       okButtonText: "OK"
//     })
//     return false
//   } else if (!validateEmail(input.email)) {
//     dialogsModule.alert({
//       message: "Enter a valid email.",
//       okButtonText: "OK"
//     })
//     return false    
//   } else if (!validatePassword(input.password, input.passwordConfirm)) {
//     return false
//   }
//   return true
// }
// function validateEmail(email) {
//   return validator.validate(email)
// }
// function validatePassword(password, passwordConfirm) {
//   if (password.length < 6 || password.length > 15 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
//     dialogsModule.alert({
//       message: "Enter a password between 6 to 15 characters long that has at least 1 number and at least 1 capital letter.",
//       okButtonText: "OK"
//     });
//     return false
//   } else if (password !== passwordConfirm) {
//     dialogsModule.alert({
//       message: "Your password and confirmation password do not match.",
//       okButtonText: "OK"
//     });
//     return false
//   };
//   return true
// }
// function registrationCall(input) {
//   let firstName = JSON.stringify(input.firstName).replace(/['"]+/g, '');
//   let lastName = JSON.stringify(input.lastName).replace(/['"]+/g, '');
//   let loginPassword = JSON.stringify(input.password).replace(/['"]+/g, '');
//   let email = JSON.stringify(input.email).replace(/['"]+/g, '');
//   let userID = JSON.stringify(input.email).replace(/['"]+/g, '');
//   let cstTime = createCSTTime();
//   let myBody = {
//     user_id: userID,
//     password: loginPassword,
//     email: email,
//     first_name: firstName,
//     last_name: lastName,
//     signup_date: cstTime
//   }
//   var myEncodedBody = formEncode(myBody);
//   return fetchModule.fetch(config.serverPHPServiceUrl + "SignUp.php", {
//     method: "POST",
//     body: myEncodedBody,
//     headers: {
//       'Accept': 'application/json',
//       "Content-Type": "application/x-www-form-urlencoded"
//     }
//   }).then(handleErrors).then(function(response) {
//     return response.json();
//   }).then(function(data) {
//     console.dir(JSON.stringify(data));
//     return data;
//   });
// }
// function createCSTTime() {
//   let utc = new Date();
//   utc.setHours(utc.getHours() - 6);
//   let cst = new Date(utc);
//   return cst.toJSON().replace(/[T]/, ' ').replace(/[.].*/,"");
// }
// function formEncode(obj) {
//   var str = [];
//   for(var p in obj)
//   str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//   return str.join("&");
// }
// function handleErrors(response) {
//   if (!response.ok) {
//       console.log(JSON.stringify(response));
//       throw Error(response.statusText);
//   }
//   return response;
// } 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdGO0FBQ2hGLHNEQUErRDtBQUMvRCwwQ0FBMkM7QUFDM0MsZ0NBQStCO0FBSS9CLDhDQUE4QztBQUM5QyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMscUNBQXFDO0FBQ3JDLDZDQUE2QztBQVM3QztJQVFFLDJCQUEyQixJQUFVLEVBQVUsUUFBa0IsRUFBVSxNQUF3QjtRQUF4RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ2pHLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXLEVBQUUsTUFBTTtZQUNuQixVQUFVLEVBQUUsTUFBTTtZQUNsQixPQUFPLEVBQUUsZUFBZTtZQUN4QixVQUFVLEVBQUUsVUFBVTtZQUN0QixpQkFBaUIsRUFBRSxVQUFVO1NBQzlCLENBQUE7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU0sb0NBQVEsR0FBZjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLDBDQUEwQztRQUMxQyx5REFBeUQ7UUFDekQsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixpREFBaUQ7UUFDakQsMkJBQTJCO1FBQzNCLFVBQVU7UUFDVixpQ0FBaUM7UUFDakMseUNBQXlDO1FBQ3pDLDhCQUE4QjtRQUM5QixtQ0FBbUM7UUFDbkMsNkJBQTZCO1FBQzdCLFlBQVk7UUFDWixlQUFlO1FBQ2YsOEJBQThCO1FBQzlCLDhEQUE4RDtRQUM5RCw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLGdDQUFnQztRQUNoQyxXQUFXO1FBQ1gsU0FBUztRQUNULE9BQU87UUFDUCxJQUFJO0lBQ04sQ0FBQztJQUVNLGdDQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDaEMsMkRBQTJEO0lBQzdELENBQUM7SUFHTSw4Q0FBa0IsR0FBekIsVUFBMEIsSUFBZTtRQUN2Qyw0Q0FBNEM7UUFDNUMsMEJBQTBCO1FBQzFCLDJGQUEyRjtRQUMzRixzQkFBc0I7SUFDeEIsQ0FBQztJQUVNLHlDQUFhLEdBQXBCO1FBQ0UsMEJBQTBCO1FBQzFCLDRIQUE0SDtRQUM1SCxzSkFBc0o7UUFDdEosb0JBQW9CO0lBQ3RCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBbEVpQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBTSxpQkFBVTtrREFBQztJQUNkO1FBQW5CLGdCQUFTLENBQUMsT0FBTyxDQUFDO2tDQUFRLGlCQUFVO29EQUFDO0lBSDNCLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FVaUMsV0FBSSxFQUFvQixpQkFBUSxFQUFrQix5QkFBZ0I7T0FSeEYsaUJBQWlCLENBcUU3QjtJQUFELHdCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksOENBQWlCO0FBdUU5Qix5Q0FBeUM7QUFDekMsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QixnREFBZ0Q7QUFDaEQsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsa0NBQWtDO0FBQ2xDLDRCQUE0QjtBQUM1QiwrQ0FBK0M7QUFDL0MsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCxtQkFBbUI7QUFDbkIsOENBQThDO0FBQzlDLDRCQUE0QjtBQUM1Qix5Q0FBeUM7QUFDekMsMkJBQTJCO0FBQzNCLFNBQVM7QUFDVCx1QkFBdUI7QUFDdkIsMkVBQTJFO0FBQzNFLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sZ0JBQWdCO0FBQ2hCLElBQUk7QUFFSixrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDLElBQUk7QUFFSix5REFBeUQ7QUFDekQsMEdBQTBHO0FBQzFHLDRCQUE0QjtBQUM1QiwrSEFBK0g7QUFDL0gsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVixtQkFBbUI7QUFDbkIsK0NBQStDO0FBQy9DLDRCQUE0QjtBQUM1QiwwRUFBMEU7QUFDMUUsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVixtQkFBbUI7QUFDbkIsT0FBTztBQUNQLGdCQUFnQjtBQUNoQixJQUFJO0FBRUoscUNBQXFDO0FBQ3JDLDJFQUEyRTtBQUMzRSx5RUFBeUU7QUFDekUsOEVBQThFO0FBQzlFLG1FQUFtRTtBQUNuRSxvRUFBb0U7QUFDcEUsbUNBQW1DO0FBRW5DLG1CQUFtQjtBQUNuQix1QkFBdUI7QUFDdkIsK0JBQStCO0FBQy9CLG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixNQUFNO0FBQ04sNENBQTRDO0FBRTVDLDBFQUEwRTtBQUMxRSxzQkFBc0I7QUFDdEIsMkJBQTJCO0FBQzNCLGlCQUFpQjtBQUNqQixzQ0FBc0M7QUFDdEMsNERBQTREO0FBQzVELFFBQVE7QUFDUixvREFBb0Q7QUFDcEQsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qix5Q0FBeUM7QUFDekMsbUJBQW1CO0FBQ25CLFFBQVE7QUFDUixJQUFJO0FBRUosNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQixzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCLGlFQUFpRTtBQUNqRSxJQUFJO0FBRUosNkJBQTZCO0FBQzdCLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsd0VBQXdFO0FBQ3hFLDBCQUEwQjtBQUMxQixJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLHdCQUF3QjtBQUN4QiwrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDLE1BQU07QUFDTixxQkFBcUI7QUFDckIsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ1aS9idXR0b25cIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBBcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuLy8gdmFyIGNvbmZpZyA9IHJlcXVpcmUoXCIuLi8uLi9zaGFyZWQvY29uZmlnXCIpXG52YXIgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xuLy8gdmFyIGZldGNoTW9kdWxlID0gcmVxdWlyZShcImZldGNoXCIpXG4vLyB2YXIgdmFsaWRhdG9yID0gcmVxdWlyZShcImVtYWlsLXZhbGlkYXRvclwiKVxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibnMtcmVnaXN0ZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwicmVnaXN0ZXIuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJyZWdpc3Rlci5jb21wb25lbnQuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKCdhYnMnKSBhYnM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJsYWJlbFwiKSBsYWJlbDogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgaW5wdXQ6IGFueTtcbiAgcHVibGljIHRleHRGaWVsZEhlaWdodDogc3RyaW5nO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLCBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIHRoaXMuaW5wdXQgPSB7XG4gICAgICBcImZpcnN0TmFtZVwiOiBcImFzZGZcIixcbiAgICAgIFwibGFzdE5hbWVcIjogXCJhc2RmXCIsXG4gICAgICBcImVtYWlsXCI6IFwiYXNkZkBhc2RmLmNvbVwiLFxuICAgICAgXCJwYXNzd29yZFwiOiBcImFzZGZhczFBXCIsXG4gICAgICBcInBhc3N3b3JkQ29uZmlybVwiOiBcImFzZGZhczFBXCJcbiAgICB9XG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyKCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIC8vIGlmICh2YWxpZGF0ZVJlZ2lzdHJhdGlvbih0aGlzLmlucHV0KSkge1xuICAgIC8vICAgcmVnaXN0cmF0aW9uQ2FsbCh0aGlzLmlucHV0KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuICAgIC8vICAgICAgIG1lc3NhZ2U6IFwiU29ycnksIHNvbWV0aGluZyB3ZW50IHdyb25nLlwiLFxuICAgIC8vICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIC8vICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSBcImVycm9yXCIpIHtcbiAgICAvLyAgICAgICBkaWFsb2dzTW9kdWxlLmFsZXJ0KHtcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmVycm9yLFxuICAgIC8vICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICBkaWFsb2dzTW9kdWxlLmFsZXJ0KHtcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6IFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwhIFBsZWFzZSBsb2cgaW4uXCIsXG4gICAgLy8gICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIC8vICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgICB0aGF0LmxvY2F0aW9uLmJhY2soKTtcbiAgICAvLyAgICAgICB9KVxuICAgIC8vICAgICB9O1xuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIH1cblxuICBwdWJsaWMgYmFjaygpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pXG4gICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KVxuICB9XG5cblxuICBwdWJsaWMgc2V0VGV4dEZpZWxkSGVpZ2h0KGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIC8vIGxldCByZWdpc3RlckJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAvLyAgIHRoaXMudGV4dEZpZWxkSGVpZ2h0ID0gKHJlZ2lzdGVyQnV0dG9uLmdldE1lYXN1cmVkSGVpZ2h0KCkgLyBjb25maWcuc2NhbGUpLnRvU3RyaW5nKCk7XG4gICAgLy8gfS5iaW5kKHRoaXMpLCAyMDApO1xuICB9XG5cbiAgcHVibGljIHBvc2l0aW9uTGFiZWwoKSB7XG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAvLyAgIHRoaXMubGFiZWxMZWZ0ID0gKCAoIGNvbmZpZy53aWR0aERJUHMgLSAodGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50LmdldE1lYXN1cmVkV2lkdGgoKSAvIGNvbmZpZy5zY2FsZSkgKSAvIDIpLnRvU3RyaW5nKCk7XG4gICAgLy8gICB0aGlzLmxhYmVsVG9wID0gKCAoICh0aGlzLmFicy5uYXRpdmVFbGVtZW50LmdldE1lYXN1cmVkSGVpZ2h0KCkgLSB0aGlzLmxhYmVsLm5hdGl2ZUVsZW1lbnQuZ2V0TWVhc3VyZWRIZWlnaHQoKSkgLyBjb25maWcuc2NhbGUpIC0gMyApLnRvU3RyaW5nKCk7XG4gICAgLy8gfS5iaW5kKHRoaXMpLCAxKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc29sZS5sb2coXCJuZ0FmdGVyVmlld0luaXRcIik7XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gdmFsaWRhdGVSZWdpc3RyYXRpb24oaW5wdXQpIHtcbi8vICAgaWYgKCFpbnB1dC5maXJzdE5hbWUpIHtcbi8vICAgICBkaWFsb2dzTW9kdWxlLmFsZXJ0KHtcbi8vICAgICAgIG1lc3NhZ2U6IFwiRmlyc3QgbmFtZSBjYW5ub3QgYmUgYmxhbmsuXCIsXG4vLyAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGZhbHNlXG4vLyAgIH0gZWxzZSBpZiAoIWlucHV0Lmxhc3ROYW1lKSB7XG4vLyAgICAgZGlhbG9nc01vZHVsZS5hbGVydCh7XG4vLyAgICAgICBtZXNzYWdlOiBcIkxhc3QgbmFtZSBjYW5ub3QgYmUgYmxhbmsuXCIsXG4vLyAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGZhbHNlXG4vLyAgIH0gZWxzZSBpZiAoIXZhbGlkYXRlRW1haWwoaW5wdXQuZW1haWwpKSB7XG4vLyAgICAgZGlhbG9nc01vZHVsZS5hbGVydCh7XG4vLyAgICAgICBtZXNzYWdlOiBcIkVudGVyIGEgdmFsaWQgZW1haWwuXCIsXG4vLyAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuLy8gICAgIH0pXG4vLyAgICAgcmV0dXJuIGZhbHNlICAgIFxuLy8gICB9IGVsc2UgaWYgKCF2YWxpZGF0ZVBhc3N3b3JkKGlucHV0LnBhc3N3b3JkLCBpbnB1dC5wYXNzd29yZENvbmZpcm0pKSB7XG4vLyAgICAgcmV0dXJuIGZhbHNlXG4vLyAgIH1cbi8vICAgcmV0dXJuIHRydWVcbi8vIH1cblxuLy8gZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuLy8gICByZXR1cm4gdmFsaWRhdG9yLnZhbGlkYXRlKGVtYWlsKVxuLy8gfVxuXG4vLyBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkLCBwYXNzd29yZENvbmZpcm0pIHtcbi8vICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDYgfHwgcGFzc3dvcmQubGVuZ3RoID4gMTUgfHwgIS9cXGQvLnRlc3QocGFzc3dvcmQpIHx8ICEvW0EtWl0vLnRlc3QocGFzc3dvcmQpKSB7XG4vLyAgICAgZGlhbG9nc01vZHVsZS5hbGVydCh7XG4vLyAgICAgICBtZXNzYWdlOiBcIkVudGVyIGEgcGFzc3dvcmQgYmV0d2VlbiA2IHRvIDE1IGNoYXJhY3RlcnMgbG9uZyB0aGF0IGhhcyBhdCBsZWFzdCAxIG51bWJlciBhbmQgYXQgbGVhc3QgMSBjYXBpdGFsIGxldHRlci5cIixcbi8vICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4vLyAgICAgfSk7XG4vLyAgICAgcmV0dXJuIGZhbHNlXG4vLyAgIH0gZWxzZSBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ29uZmlybSkge1xuLy8gICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuLy8gICAgICAgbWVzc2FnZTogXCJZb3VyIHBhc3N3b3JkIGFuZCBjb25maXJtYXRpb24gcGFzc3dvcmQgZG8gbm90IG1hdGNoLlwiLFxuLy8gICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbi8vICAgICB9KTtcbi8vICAgICByZXR1cm4gZmFsc2Vcbi8vICAgfTtcbi8vICAgcmV0dXJuIHRydWVcbi8vIH1cblxuLy8gZnVuY3Rpb24gcmVnaXN0cmF0aW9uQ2FsbChpbnB1dCkge1xuLy8gICBsZXQgZmlyc3ROYW1lID0gSlNPTi5zdHJpbmdpZnkoaW5wdXQuZmlyc3ROYW1lKS5yZXBsYWNlKC9bJ1wiXSsvZywgJycpO1xuLy8gICBsZXQgbGFzdE5hbWUgPSBKU09OLnN0cmluZ2lmeShpbnB1dC5sYXN0TmFtZSkucmVwbGFjZSgvWydcIl0rL2csICcnKTtcbi8vICAgbGV0IGxvZ2luUGFzc3dvcmQgPSBKU09OLnN0cmluZ2lmeShpbnB1dC5wYXNzd29yZCkucmVwbGFjZSgvWydcIl0rL2csICcnKTtcbi8vICAgbGV0IGVtYWlsID0gSlNPTi5zdHJpbmdpZnkoaW5wdXQuZW1haWwpLnJlcGxhY2UoL1snXCJdKy9nLCAnJyk7XG4vLyAgIGxldCB1c2VySUQgPSBKU09OLnN0cmluZ2lmeShpbnB1dC5lbWFpbCkucmVwbGFjZSgvWydcIl0rL2csICcnKTtcbi8vICAgbGV0IGNzdFRpbWUgPSBjcmVhdGVDU1RUaW1lKCk7XG5cbi8vICAgbGV0IG15Qm9keSA9IHtcbi8vICAgICB1c2VyX2lkOiB1c2VySUQsXG4vLyAgICAgcGFzc3dvcmQ6IGxvZ2luUGFzc3dvcmQsXG4vLyAgICAgZW1haWw6IGVtYWlsLFxuLy8gICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZSxcbi8vICAgICBsYXN0X25hbWU6IGxhc3ROYW1lLFxuLy8gICAgIHNpZ251cF9kYXRlOiBjc3RUaW1lXG4vLyAgIH1cbi8vICAgdmFyIG15RW5jb2RlZEJvZHkgPSBmb3JtRW5jb2RlKG15Qm9keSk7XG5cbi8vICAgcmV0dXJuIGZldGNoTW9kdWxlLmZldGNoKGNvbmZpZy5zZXJ2ZXJQSFBTZXJ2aWNlVXJsICsgXCJTaWduVXAucGhwXCIsIHtcbi8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuLy8gICAgIGJvZHk6IG15RW5jb2RlZEJvZHksXG4vLyAgICAgaGVhZGVyczoge1xuLy8gICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbi8vICAgICB9XG4vLyAgIH0pLnRoZW4oaGFuZGxlRXJyb3JzKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4vLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbi8vICAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4vLyAgICAgY29uc29sZS5kaXIoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuLy8gICAgIHJldHVybiBkYXRhO1xuLy8gICB9KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlQ1NUVGltZSgpIHtcbi8vICAgbGV0IHV0YyA9IG5ldyBEYXRlKCk7XG4vLyAgIHV0Yy5zZXRIb3Vycyh1dGMuZ2V0SG91cnMoKSAtIDYpO1xuLy8gICBsZXQgY3N0ID0gbmV3IERhdGUodXRjKTtcbi8vICAgcmV0dXJuIGNzdC50b0pTT04oKS5yZXBsYWNlKC9bVF0vLCAnICcpLnJlcGxhY2UoL1suXS4qLyxcIlwiKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gZm9ybUVuY29kZShvYmopIHtcbi8vICAgdmFyIHN0ciA9IFtdO1xuLy8gICBmb3IodmFyIHAgaW4gb2JqKVxuLy8gICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbcF0pKTtcbi8vICAgcmV0dXJuIHN0ci5qb2luKFwiJlwiKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaGFuZGxlRXJyb3JzKHJlc3BvbnNlKSB7XG4vLyAgIGlmICghcmVzcG9uc2Uub2spIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG4vLyAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbi8vICAgfVxuLy8gICByZXR1cm4gcmVzcG9uc2U7XG4vLyB9Il19