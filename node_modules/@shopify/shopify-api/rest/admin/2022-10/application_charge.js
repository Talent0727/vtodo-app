"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationCharge = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class ApplicationCharge extends base_1.Base {
    static find({ session, id, fields = null }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "id": id },
                params: { "fields": fields },
            });
            return result ? result[0] : null;
        });
    }
    static all(_a) {
        var { session, since_id = null, fields = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "since_id", "fields"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: {},
                params: Object.assign({ "since_id": since_id, "fields": fields }, otherArgs),
            });
            return response;
        });
    }
}
exports.ApplicationCharge = ApplicationCharge;
ApplicationCharge.API_VERSION = types_1.ApiVersion.October22;
ApplicationCharge.NAME = 'application_charge';
ApplicationCharge.PLURAL_NAME = 'application_charges';
ApplicationCharge.HAS_ONE = {};
ApplicationCharge.HAS_MANY = {};
ApplicationCharge.PATHS = [
    { "http_method": "get", "operation": "get", "ids": [], "path": "application_charges.json" },
    { "http_method": "get", "operation": "get", "ids": ["id"], "path": "application_charges/<id>.json" },
    { "http_method": "post", "operation": "post", "ids": [], "path": "application_charges.json" }
];
//# sourceMappingURL=application_charge.js.map