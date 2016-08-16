"use strict";
var router_1 = require('@angular/router');
var sign_in_1 = require('./parts/sign/sign-in/sign-in');
var page_component_1 = require('./page.component');
var appRoutes = [
    {
        path: '',
        redirectTo: "/sign-in",
        pathMatch: "full",
    },
    { path: 'sign-in',
        component: sign_in_1.SignInComponent },
    {
        path: '**',
        component: page_component_1.PageComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map