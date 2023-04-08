"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRisk = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class OrderRisk extends base_1.Base {
    static getJsonBodyName() {
        return "risk";
    }
    static find({ session, id, order_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "order_id": order_id },
                params: {},
            });
            return result ? result[0] : null;
        });
    }
    static delete({ session, id, order_id = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.request({
                http_method: "delete",
                operation: "delete",
                session: session,
                urlIds: { "id": id, "order_id": order_id },
                params: {},
            });
            return response ? response.body : null;
        });
    }
    static all(_a) {
        var { session, order_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "order_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "order_id": order_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
}
exports.OrderRisk = OrderRisk;
OrderRisk.API_VERSION = types_1.ApiVersion.October22;
OrderRisk.NAME = 'order_risk';
OrderRisk.PLURAL_NAME = 'order_risks';
OrderRisk.HAS_ONE = {};
OrderRisk.HAS_MANY = {};
OrderRisk.PATHS = [
    { "http_method": "delete", "operation": "delete", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id"], "path": "orders/<order_id>/risks.json" },
    { "http_method": "get", "operation": "get", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["order_id"], "path": "orders/<order_id>/risks.json" },
    { "http_method": "put", "operation": "put", "ids": ["order_id", "id"], "path": "orders/<order_id>/risks/<id>.json" }
];
//# sourceMappingURL=order_risk.js.map