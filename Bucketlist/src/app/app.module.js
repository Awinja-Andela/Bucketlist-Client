"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var app_config_1 = require("./app.config");
var app_component_1 = require("./app.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var bucketlist_component_1 = require("./bucketlist/bucketlist.component");
var items_component_1 = require("./items/items.component");
var landing_component_1 = require("./landing/landing.component");
var alert_service_1 = require("./services/alert.service");
var alert_component_1 = require("./directives/alert.component");
var auth_guard_1 = require("./guards/auth.guard");
var authentication_service_1 = require("./services/authentication.service");
var addbucketlist_component_1 = require("./bucketlist/addbucketlist.component");
var additem_component_1 = require("./items/additem.component");
var editbucketlist_component_1 = require("./bucketlist/editbucketlist.component");
var nav_component_1 = require("./nav/nav.component");
var user_service_1 = require("./services/user.service");
var data_service_1 = require("./services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_1.routing,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
            bucketlist_component_1.BucketlistComponent,
            items_component_1.ItemsComponent,
            landing_component_1.LandingComponent,
            alert_component_1.AlertComponent,
            addbucketlist_component_1.AddBucketlistComponent,
            additem_component_1.AddItemComponent,
            nav_component_1.NavBar,
            editbucketlist_component_1.EditBucketlistComponent
        ],
        providers: [
            app_config_1.AppConfig,
            alert_service_1.AlertService,
            auth_guard_1.AuthGuard,
            authentication_service_1.AuthenticationService,
            user_service_1.UserService,
            data_service_1.dataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map