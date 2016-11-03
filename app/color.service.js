"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var g,e=arguments.length,f=e<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(g=a[h])&&(f=(e<3?g(f):e>3?g(b,c,f):g(b,c))||f);return e>3&&f&&Object.defineProperty(b,c,f),f},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)},core_1=require("@angular/core"),http_1=require("@angular/http");require("rxjs/add/operator/toPromise");var ColorService=function(){function a(a){this.http=a,this.colorsUrl="app/colors.json"}return a.prototype.getColors=function(){return this.http.get(this.colorsUrl).toPromise().then(function(a){return a.json().colors}).catch(this.handleError)},a.prototype.handleError=function(a){return console.error("An error occurred",a),Promise.reject(a.message||a)},a=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],a)}();exports.ColorService=ColorService;