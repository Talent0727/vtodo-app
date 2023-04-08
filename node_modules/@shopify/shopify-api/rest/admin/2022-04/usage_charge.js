"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageCharge = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class UsageCharge extends base_1.Base {
    static find({ session, id, recurring_application_charge_id = null, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id, "recurring_application_charge_id": recurring_application_charge_id },
                params: { "fields": fields },
            });
            return result ? result[0] : null;
        });
    }
    static all(_a) {
        var { session, recurring_application_charge_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "recurring_application_charge_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "recurring_application_charge_id": recurring_application_charge_id },
                params: Object.assign({ "fields": fields }, otherArgs),
            });
            return response;
        });
    }
}
exports.UsageCharge = UsageCharge;
UsageCharge.API_VERSION = types_1.ApiVersion.April22;
UsageCharge.NAME = 'usage_charge';
UsageCharge.PLURAL_NAME = 'usage_charges';
UsageCharge.HAS_ONE = {};
UsageCharge.HAS_MANY = {};
UsageCharge.PATHS = [
    { "http_method": "get", "operation": "get", "ids": ["recurring_application_charge_id"], "path": "recurring_application_charges/<recurring_application_charge_id>/usage_charges.json" },
    { "http_method": "get", "operation": "get", "ids": ["recurring_application_charge_id", "id"], "path": "recurring_application_charges/<recurring_application_charge_id>/usage_charges/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": ["recurring_application_charge_id"], "path": "recurring_application_charges/<recurring_application_charge_id>/usage_charges.json" }
];
//# sourceMappingURL=usage_charge.js.map