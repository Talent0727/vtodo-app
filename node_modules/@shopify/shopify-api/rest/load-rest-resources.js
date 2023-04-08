"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRestResources = void 0;
const logger_1 = require("../lib/logger");
function loadRestResources({ resources, config, RestClient, }) {
    const firstResource = Object.keys(resources)[0];
    if (config.apiVersion !== resources[firstResource].API_VERSION) {
        (0, logger_1.logger)(config).warning(`Loading REST resources for API version ${resources[firstResource].API_VERSION}, which doesn't match the default ${config.apiVersion}`);
    }
    return Object.fromEntries(Object.entries(resources).map(([name, resource]) => {
        class NewResource extends resource {
        }
        NewResource.setClassProperties({
            CLIENT: RestClient,
            CONFIG: config,
        });
        Object.entries(NewResource.HAS_ONE).map(([_attribute, klass]) => {
            klass.setClassProperties({
                CLIENT: RestClient,
                CONFIG: config,
            });
        });
        Object.entries(NewResource.HAS_MANY).map(([_attribute, klass]) => {
            klass.setClassProperties({
                CLIENT: RestClient,
                CONFIG: config,
            });
        });
        Reflect.defineProperty(NewResource, 'name', {
            value: name,
        });
        return [name, NewResource];
    }));
}
exports.loadRestResources = loadRestResources;
//# sourceMappingURL=load-rest-resources.js.map