(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('modulea', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = global || self, factory(global.modulea = {}, global.ng.core, global.ng.router));
}(this, function (exports, core, router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaService = /** @class */ (function () {
        function ModuleaService() {
        }
        ModuleaService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModuleaService.ctorParameters = function () { return []; };
        /** @nocollapse */ ModuleaService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ModuleaService_Factory() { return new ModuleaService(); }, token: ModuleaService, providedIn: "root" });
        return ModuleaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaComponent = /** @class */ (function () {
        function ModuleaComponent() {
        }
        /**
         * @return {?}
         */
        ModuleaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ModuleaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-modulea',
                        template: "<form>\r\n    <section class=\"form-block\">\r\n        <label>Input Fields</label>\r\n        <div class=\"form-group\">\r\n            <label for=\"formFields_1\">Textbox [type=\"text\"]</label>\r\n            <input type=\"text\" id=\"formFields_1\" placeholder=\"Email\" size=\"35\" disabled>\r\n            <input type=\"text\" id=\"formFields_2\" placeholder=\"Email 2\" size=\"45\">\r\n            <input type=\"text\" id=\"formFields_3\" placeholder=\"Email\" size=\"25\">\r\n            <input type=\"text\" id=\"formFields_4\" placeholder=\"Email 2\">\r\n            <input type=\"text\" id=\"formFields_5\" placeholder=\"Email\">\r\n            <input type=\"text\" id=\"formFields_6\" placeholder=\"Email 2\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"formFields_7\">Textbox [type=\"password\"]</label>\r\n            <input type=\"password\" id=\"formFields_7\" placeholder=\"Password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"formFields_8\">Textarea</label>\r\n            <textarea id=\"formFields_8\" rows=\"5\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"formFields_9\">Textbox [type=\"url\"]</label>\r\n            <input type=\"url\" id=\"formFields_9\" placeholder=\"https://vmware.github.io/clarity/\" size=\"35\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"formFields_10\">Textbox [type=\"tel\"]</label>\r\n            <input type=\"tel\" id=\"formFields_10\" size=\"35\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"formFields_11\">Textbox [type=\"date\"]</label>\r\n            <input type=\"date\" id=\"formFields_11\" size=\"35\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"formFields_12\">Textbox [type=\"datetime-local\"]</label>\r\n            <input type=\"datetime-local\" id=\"formFields_12\" size=\"35\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"formFields_13\">Textbox Readonly [type=\"text\"]</label>\r\n            <input type=\"text\" id=\"formFields_13\" size=\"35\" readonly value=\"Readonly Text\">\r\n        </div>\r\n    </section>\r\n</form>"
                    }] }
        ];
        /** @nocollapse */
        ModuleaComponent.ctorParameters = function () { return []; };
        return ModuleaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModuleaModule = /** @class */ (function () {
        function ModuleaModule() {
        }
        ModuleaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            router.RouterModule.forChild([
                                {
                                    path: '', pathMatch: 'full', component: ModuleaComponent
                                }
                            ])
                        ],
                        declarations: [ModuleaComponent],
                        exports: [ModuleaComponent]
                    },] }
        ];
        return ModuleaModule;
    }());

    exports.ModuleaComponent = ModuleaComponent;
    exports.ModuleaModule = ModuleaModule;
    exports.ModuleaService = ModuleaService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=modulea.umd.js.map
