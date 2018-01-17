import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { EventData } from 'data/observable';
import { RouterExtensions } from "nativescript-angular/router";
import { NavigatedData, Page } from "ui/page";
import { ApplicationEventData, exitEvent, launchEvent, on, resumeEvent, suspendEvent} from "tns-core-modules/application";


@Component({
  moduleId: module.id,
  selector: "ns-login",
  templateUrl: "login.component.html",
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, AfterViewInit {

  public constructor(private page: Page, private router: RouterExtensions) {
    console.log("constructing login")
    this.page = page;
    this.page.on("navigatingTo", this.onNavigatingTo.bind(this));
    this.page.on("navigatedTo", this.onNavigatedTo.bind(this));
    this.page.on("navigatingFrom", this.onNavigatingFrom.bind(this));
    this.page.on("navigatedFrom", this.onNavigatedFrom.bind(this));
    on(suspendEvent, this.onPause.bind(this));
    on(resumeEvent, this.onResume.bind(this));
    on(launchEvent, this.onStart.bind(this));
    on(exitEvent, this.onStop.bind(this));
    page.actionBarHidden = true;
  }

  public ngOnInit() {
    console.log("ngOnInit");
  }

  public ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  public login() {
  }

  public loginFacebook() {
  }

  public register() {
    console.log("register");
    this.router.navigate(["/register"])
    // this.router.navigate(["/register"], { clearHistory: true })
  }

  protected onNavigatingTo(arg?: NavigatedData): void {
      console.log("onNavigatingTo");
  }

  protected onNavigatedTo(arg?: NavigatedData): void {
      console.log("onNavigatedTo");
  }

  protected onNavigatingFrom(arg?: NavigatedData): void {
      console.log("onNavigatingFrom");
  }

  protected onNavigatedFrom(arg?: NavigatedData): void {
      console.log("onNavigatedFrom");
  }

  protected onPause(arg?: ApplicationEventData): void {
      console.log("lifecycle onPause");
  }

  protected onResume(arg?: ApplicationEventData): void {
      console.log("lifecycle onResume");
  }

  protected onStart(arg?: ApplicationEventData): void {
      console.log("lifecycle onStart");
  }

  protected onStop(arg?: ApplicationEventData): void {
      console.log("lifecycle onStop");
  }
}