import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Location } from '@angular/common';
import { Page } from "ui/page";
import { Button } from "ui/button";
import { EventData } from 'data/observable';
import * as ApplicationSettings from "application-settings";
// var config = require("../../shared/config")
var dialogsModule = require("ui/dialogs");
// var fetchModule = require("fetch")
// var validator = require("email-validator")

@Component({
  moduleId: module.id,
  selector: "ns-register",
  templateUrl: "register.component.html",
  styleUrls: ["register.component.css"]
})

export class RegisterComponent implements AfterViewInit {

  @ViewChild('abs') abs: ElementRef;
  @ViewChild("label") label: ElementRef;

  public input: any;
  public textFieldHeight: string;

  public constructor(private page: Page, private location: Location, private router: RouterExtensions) {
    this.input = {
      "firstName": "asdf",
      "lastName": "asdf",
      "email": "asdf@asdf.com",
      "password": "asdfas1A",
      "passwordConfirm": "asdfas1A"
    }
    page.actionBarHidden = true;
  }

  public register() {
    var that = this
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
  }

  public back() {
    this.router.navigate(["/login"], { clearHistory: true })
  }


  public setTextFieldHeight(args: EventData) {
    // let registerButton = <Button>args.object;
    // setTimeout(function() {
    //   this.textFieldHeight = (registerButton.getMeasuredHeight() / config.scale).toString();
    // }.bind(this), 200);
  }

  public positionLabel() {
    // setTimeout(function() {
    //   this.labelLeft = ( ( config.widthDIPs - (this.label.nativeElement.getMeasuredWidth() / config.scale) ) / 2).toString();
    //   this.labelTop = ( ( (this.abs.nativeElement.getMeasuredHeight() - this.label.nativeElement.getMeasuredHeight()) / config.scale) - 3 ).toString();
    // }.bind(this), 1);
  }

  public ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
}

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