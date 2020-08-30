"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const local_module_1 = require("./modules/local-module");
const ioc_1 = require("@coremod/ioc");
const logger_1 = require("@coremod/logger");
const express_1 = require("@coremod/express");
const public_1 = require("@coremod/public");
const typeorm_1 = require("@coremod/typeorm");
const authentication_1 = require("@coremod/authentication");
// import { module as AuthenticationModule } from '../coremod-module-authentication/src';
exports.configuration = {
    modules: [
        ioc_1.module,
        [local_module_1.module, {
                something: true,
                configuration: {
                    host: '3031'
                }
            }],
        logger_1.module,
        express_1.module,
        [public_1.module, {
                favicon: false
            }],
        typeorm_1.module,
        [authentication_1.module, {
                configuration: {
                    jwt: {
                        secretOrKey: '##helloworld1234##'
                    }
                }
            }]
    ]
};
//# sourceMappingURL=coremod.config.js.map