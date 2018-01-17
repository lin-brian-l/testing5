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
        this.router.navigate(["/login"], { clearHistory: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdGO0FBQ2hGLHNEQUErRDtBQUMvRCwwQ0FBMkM7QUFDM0MsZ0NBQStCO0FBSS9CLDhDQUE4QztBQUM5QyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUMscUNBQXFDO0FBQ3JDLDZDQUE2QztBQVM3QztJQVFFLDJCQUEyQixJQUFVLEVBQVUsUUFBa0IsRUFBVSxNQUF3QjtRQUF4RSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ2pHLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXLEVBQUUsTUFBTTtZQUNuQixVQUFVLEVBQUUsTUFBTTtZQUNsQixPQUFPLEVBQUUsZUFBZTtZQUN4QixVQUFVLEVBQUUsVUFBVTtZQUN0QixpQkFBaUIsRUFBRSxVQUFVO1NBQzlCLENBQUE7UUFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRU0sb0NBQVEsR0FBZjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLDBDQUEwQztRQUMxQyx5REFBeUQ7UUFDekQsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixpREFBaUQ7UUFDakQsMkJBQTJCO1FBQzNCLFVBQVU7UUFDVixpQ0FBaUM7UUFDakMseUNBQXlDO1FBQ3pDLDhCQUE4QjtRQUM5QixtQ0FBbUM7UUFDbkMsNkJBQTZCO1FBQzdCLFlBQVk7UUFDWixlQUFlO1FBQ2YsOEJBQThCO1FBQzlCLDhEQUE4RDtRQUM5RCw2QkFBNkI7UUFDN0IsNkJBQTZCO1FBQzdCLGdDQUFnQztRQUNoQyxXQUFXO1FBQ1gsU0FBUztRQUNULE9BQU87UUFDUCxJQUFJO0lBQ04sQ0FB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QUErQztBQUMvQywwQ0FBMEM7QUFDMUMsTUFBTTtBQUNOLHFCQUFxQjtBQUNyQixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcInVpL2J1dHRvblwiO1xuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG4vLyB2YXIgY29uZmlnID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9jb25maWdcIilcbnZhciBkaWFsb2dzTW9kdWxlID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG4vLyB2YXIgZmV0Y2hNb2R1bGUgPSByZXF1aXJlKFwiZmV0Y2hcIilcbi8vIHZhciB2YWxpZGF0b3IgPSByZXF1aXJlKFwiZW1haWwtdmFsaWRhdG9yXCIpXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJucy1yZWdpc3RlclwiLFxuICB0ZW1wbGF0ZVVybDogXCJyZWdpc3Rlci5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInJlZ2lzdGVyLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ2FicycpIGFiczogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcImxhYmVsXCIpIGxhYmVsOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBpbnB1dDogYW55O1xuICBwdWJsaWMgdGV4dEZpZWxkSGVpZ2h0OiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgdGhpcy5pbnB1dCA9IHtcbiAgICAgIFwiZmlyc3ROYW1lXCI6IFwiYXNkZlwiLFxuICAgICAgXCJsYXN0TmFtZVwiOiBcImFzZGZcIixcbiAgICAgIFwiZW1haWxcIjogXCJhc2RmQGFzZGYuY29tXCIsXG4gICAgICBcInBhc3N3b3JkXCI6IFwiYXNkZmFzMUFcIixcbiAgICAgIFwicGFzc3dvcmRDb25maXJtXCI6IFwiYXNkZmFzMUFcIlxuICAgIH1cbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXIoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgLy8gaWYgKHZhbGlkYXRlUmVnaXN0cmF0aW9uKHRoaXMuaW5wdXQpKSB7XG4gICAgLy8gICByZWdpc3RyYXRpb25DYWxsKHRoaXMuaW5wdXQpLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgZGlhbG9nc01vZHVsZS5hbGVydCh7XG4gICAgLy8gICAgICAgbWVzc2FnZTogXCJTb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gICAgLy8gICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgLy8gICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IFwiZXJyb3JcIikge1xuICAgIC8vICAgICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuICAgIC8vICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZXJyb3IsXG4gICAgLy8gICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgIC8vICAgICAgIH0pO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuICAgIC8vICAgICAgICAgbWVzc2FnZTogXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCEgUGxlYXNlIGxvZyBpbi5cIixcbiAgICAvLyAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgLy8gICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgICAgIHRoYXQubG9jYXRpb24uYmFjaygpO1xuICAgIC8vICAgICAgIH0pXG4gICAgLy8gICAgIH07XG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxuXG4gIHB1YmxpYyBiYWNrKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSlcbiAgfVxuXG5cbiAgcHVibGljIHNldFRleHRGaWVsZEhlaWdodChhcmdzOiBFdmVudERhdGEpIHtcbiAgICAvLyBsZXQgcmVnaXN0ZXJCdXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gICB0aGlzLnRleHRGaWVsZEhlaWdodCA9IChyZWdpc3RlckJ1dHRvbi5nZXRNZWFzdXJlZEhlaWdodCgpIC8gY29uZmlnLnNjYWxlKS50b1N0cmluZygpO1xuICAgIC8vIH0uYmluZCh0aGlzKSwgMjAwKTtcbiAgfVxuXG4gIHB1YmxpYyBwb3NpdGlvbkxhYmVsKCkge1xuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gICB0aGlzLmxhYmVsTGVmdCA9ICggKCBjb25maWcud2lkdGhESVBzIC0gKHRoaXMubGFiZWwubmF0aXZlRWxlbWVudC5nZXRNZWFzdXJlZFdpZHRoKCkgLyBjb25maWcuc2NhbGUpICkgLyAyKS50b1N0cmluZygpO1xuICAgIC8vICAgdGhpcy5sYWJlbFRvcCA9ICggKCAodGhpcy5hYnMubmF0aXZlRWxlbWVudC5nZXRNZWFzdXJlZEhlaWdodCgpIC0gdGhpcy5sYWJlbC5uYXRpdmVFbGVtZW50LmdldE1lYXN1cmVkSGVpZ2h0KCkpIC8gY29uZmlnLnNjYWxlKSAtIDMgKS50b1N0cmluZygpO1xuICAgIC8vIH0uYmluZCh0aGlzKSwgMSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnNvbGUubG9nKFwibmdBZnRlclZpZXdJbml0XCIpO1xuICB9XG59XG5cbi8vIGZ1bmN0aW9uIHZhbGlkYXRlUmVnaXN0cmF0aW9uKGlucHV0KSB7XG4vLyAgIGlmICghaW5wdXQuZmlyc3ROYW1lKSB7XG4vLyAgICAgZGlhbG9nc01vZHVsZS5hbGVydCh7XG4vLyAgICAgICBtZXNzYWdlOiBcIkZpcnN0IG5hbWUgY2Fubm90IGJlIGJsYW5rLlwiLFxuLy8gICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbi8vICAgICB9KVxuLy8gICAgIHJldHVybiBmYWxzZVxuLy8gICB9IGVsc2UgaWYgKCFpbnB1dC5sYXN0TmFtZSkge1xuLy8gICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuLy8gICAgICAgbWVzc2FnZTogXCJMYXN0IG5hbWUgY2Fubm90IGJlIGJsYW5rLlwiLFxuLy8gICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbi8vICAgICB9KVxuLy8gICAgIHJldHVybiBmYWxzZVxuLy8gICB9IGVsc2UgaWYgKCF2YWxpZGF0ZUVtYWlsKGlucHV0LmVtYWlsKSkge1xuLy8gICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuLy8gICAgICAgbWVzc2FnZTogXCJFbnRlciBhIHZhbGlkIGVtYWlsLlwiLFxuLy8gICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbi8vICAgICB9KVxuLy8gICAgIHJldHVybiBmYWxzZSAgICBcbi8vICAgfSBlbHNlIGlmICghdmFsaWRhdGVQYXNzd29yZChpbnB1dC5wYXNzd29yZCwgaW5wdXQucGFzc3dvcmRDb25maXJtKSkge1xuLy8gICAgIHJldHVybiBmYWxzZVxuLy8gICB9XG4vLyAgIHJldHVybiB0cnVlXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbi8vICAgcmV0dXJuIHZhbGlkYXRvci52YWxpZGF0ZShlbWFpbClcbi8vIH1cblxuLy8gZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCwgcGFzc3dvcmRDb25maXJtKSB7XG4vLyAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA2IHx8IHBhc3N3b3JkLmxlbmd0aCA+IDE1IHx8ICEvXFxkLy50ZXN0KHBhc3N3b3JkKSB8fCAhL1tBLVpdLy50ZXN0KHBhc3N3b3JkKSkge1xuLy8gICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuLy8gICAgICAgbWVzc2FnZTogXCJFbnRlciBhIHBhc3N3b3JkIGJldHdlZW4gNiB0byAxNSBjaGFyYWN0ZXJzIGxvbmcgdGhhdCBoYXMgYXQgbGVhc3QgMSBudW1iZXIgYW5kIGF0IGxlYXN0IDEgY2FwaXRhbCBsZXR0ZXIuXCIsXG4vLyAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuLy8gICAgIH0pO1xuLy8gICAgIHJldHVybiBmYWxzZVxuLy8gICB9IGVsc2UgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENvbmZpcm0pIHtcbi8vICAgICBkaWFsb2dzTW9kdWxlLmFsZXJ0KHtcbi8vICAgICAgIG1lc3NhZ2U6IFwiWW91ciBwYXNzd29yZCBhbmQgY29uZmlybWF0aW9uIHBhc3N3b3JkIGRvIG5vdCBtYXRjaC5cIixcbi8vICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4vLyAgICAgfSk7XG4vLyAgICAgcmV0dXJuIGZhbHNlXG4vLyAgIH07XG4vLyAgIHJldHVybiB0cnVlXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvbkNhbGwoaW5wdXQpIHtcbi8vICAgbGV0IGZpcnN0TmFtZSA9IEpTT04uc3RyaW5naWZ5KGlucHV0LmZpcnN0TmFtZSkucmVwbGFjZSgvWydcIl0rL2csICcnKTtcbi8vICAgbGV0IGxhc3ROYW1lID0gSlNPTi5zdHJpbmdpZnkoaW5wdXQubGFzdE5hbWUpLnJlcGxhY2UoL1snXCJdKy9nLCAnJyk7XG4vLyAgIGxldCBsb2dpblBhc3N3b3JkID0gSlNPTi5zdHJpbmdpZnkoaW5wdXQucGFzc3dvcmQpLnJlcGxhY2UoL1snXCJdKy9nLCAnJyk7XG4vLyAgIGxldCBlbWFpbCA9IEpTT04uc3RyaW5naWZ5KGlucHV0LmVtYWlsKS5yZXBsYWNlKC9bJ1wiXSsvZywgJycpO1xuLy8gICBsZXQgdXNlcklEID0gSlNPTi5zdHJpbmdpZnkoaW5wdXQuZW1haWwpLnJlcGxhY2UoL1snXCJdKy9nLCAnJyk7XG4vLyAgIGxldCBjc3RUaW1lID0gY3JlYXRlQ1NUVGltZSgpO1xuXG4vLyAgIGxldCBteUJvZHkgPSB7XG4vLyAgICAgdXNlcl9pZDogdXNlcklELFxuLy8gICAgIHBhc3N3b3JkOiBsb2dpblBhc3N3b3JkLFxuLy8gICAgIGVtYWlsOiBlbWFpbCxcbi8vICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWUsXG4vLyAgICAgbGFzdF9uYW1lOiBsYXN0TmFtZSxcbi8vICAgICBzaWdudXBfZGF0ZTogY3N0VGltZVxuLy8gICB9XG4vLyAgIHZhciBteUVuY29kZWRCb2R5ID0gZm9ybUVuY29kZShteUJvZHkpO1xuXG4vLyAgIHJldHVybiBmZXRjaE1vZHVsZS5mZXRjaChjb25maWcuc2VydmVyUEhQU2VydmljZVVybCArIFwiU2lnblVwLnBocFwiLCB7XG4vLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbi8vICAgICBib2R5OiBteUVuY29kZWRCb2R5LFxuLy8gICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4vLyAgICAgfVxuLy8gICB9KS50aGVuKGhhbmRsZUVycm9ycykudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4vLyAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuLy8gICAgIGNvbnNvbGUuZGlyKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbi8vICAgICByZXR1cm4gZGF0YTtcbi8vICAgfSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUNTVFRpbWUoKSB7XG4vLyAgIGxldCB1dGMgPSBuZXcgRGF0ZSgpO1xuLy8gICB1dGMuc2V0SG91cnModXRjLmdldEhvdXJzKCkgLSA2KTtcbi8vICAgbGV0IGNzdCA9IG5ldyBEYXRlKHV0Yyk7XG4vLyAgIHJldHVybiBjc3QudG9KU09OKCkucmVwbGFjZSgvW1RdLywgJyAnKS5yZXBsYWNlKC9bLl0uKi8sXCJcIik7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGZvcm1FbmNvZGUob2JqKSB7XG4vLyAgIHZhciBzdHIgPSBbXTtcbi8vICAgZm9yKHZhciBwIGluIG9iailcbi8vICAgc3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4vLyAgIHJldHVybiBzdHIuam9pbihcIiZcIik7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGhhbmRsZUVycm9ycyhyZXNwb25zZSkge1xuLy8gICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuLy8gICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4vLyAgIH1cbi8vICAgcmV0dXJuIHJlc3BvbnNlO1xuLy8gfSJdfQ==