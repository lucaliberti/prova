import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs"; // importare questo modulo
import { Servizio01Service } from "../../servizio01.service";
import { environment } from "../../../environments/environment";

// per usare HttpClient è necessario modificara anche il file app.module.ts
// https://angular.io/guide/http
import { HttpClient } from "@angular/common/http";


import { AirDataset } from "../../Models/air-dataset.model"

@Component({
  selector: "app-air-widget-main",
  templateUrl: "./air-widget-main.component.html",
  styleUrls: ["./air-widget-main.component.css"],
})
export class AirWidgetMainComponent implements OnInit, OnDestroy {
  isFething: boolean = true;

  
  reportDataArr:AirDataset[];
  subscription: Subscription;

  // la apikey e l'endpoint sono memeorizzati nel file  src/environments/environment.ts
  apiEndpoint = environment.apiEndpoint;

  constructor(private serv01: Servizio01Service) {} // viene "iniettata" la classe-servizio  serv01 di tipo Servizio01Service

  ngOnInit() {
    this.getData();
  }

  // utilizza la promise e la chiamata fetch
  getData() {
    let observable = this.serv01.httpGet(this.apiEndpoint);
    this.subscription = observable.subscribe((httpResponse) => {
      this.setData(httpResponse);
    });
  }

  setData(data: AirDataset[]) {
    this.reportDataArr = data;
    this.isFething = false;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log("oggetto observalbe distrutto ");
    }
  }
}
