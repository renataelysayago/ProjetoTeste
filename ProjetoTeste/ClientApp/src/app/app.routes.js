"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_ROUTES = void 0;
var home_component_1 = require("./pages/home/home.component");
var users_component_1 = require("./pages/users/users.component");
exports.APP_ROUTES = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'home', component: home_component_1.HomeComponent },
];
//# sourceMappingURL=app.routes.js.map