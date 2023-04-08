"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeEvidence = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
const fulfillment_1 = require("./fulfillment");
class DisputeEvidence extends base_1.Base {
    static find({ session, dispute_id }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const result = yield this.baseFind({
                session: session,
                urlIds: { "dispute_id": dispute_id },
                params: {},
            });
            return result ? result[0] : null;
        });
    }
}
exports.DisputeEvidence = DisputeEvidence;
DisputeEvidence.API_VERSION = types_1.ApiVersion.October22;
DisputeEvidence.NAME = 'dispute_evidence';
DisputeEvidence.PLURAL_NAME = 'dispute_evidences';
DisputeEvidence.HAS_ONE = {};
DisputeEvidence.HAS_MANY = {
    "fulfillments": fulfillment_1.Fulfillment
};
DisputeEvidence.PATHS = [
    { "http_method": "get", "operation": "get", "ids": ["dispute_id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_evidences.json" },
    { "http_method": "put", "operation": "put", "ids": ["dispute_id"], "path": "shopify_payments/disputes/<dispute_id>/dispute_evidences.json" }
];
DisputeEvidence.PRIMARY_KEY = "dispute_id";
//# sourceMappingURL=dispute_evidence.js.map