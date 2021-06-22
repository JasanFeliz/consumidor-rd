"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var AjustePage = /** @class */ (function () {
    function AjustePage() {
    }
    AjustePage.prototype.ngOnInit = function () {
    };
    AjustePage.prototype.toggleTheme = function (event) {
        if (event.detail.checked) {
            document.body.setAttribute('color-theme', 'dark');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }
    };
    AjustePage = __decorate([
        core_1.Component({
            selector: 'app-ajuste',
            templateUrl: './ajuste.page.html',
            styleUrls: ['./ajuste.page.scss']
        })
    ], AjustePage);
    return AjustePage;
}());
exports.AjustePage = AjustePage;
/*

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');
       }
       else{
         document.body.setAttribute('color-theme','light');
       }
      }
}

*/

//# sourceMappingURL=ajuste.page.js.map
