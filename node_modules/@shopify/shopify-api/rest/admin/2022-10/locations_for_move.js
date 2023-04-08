"use strict";
/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationsForMove = void 0;
const tslib_1 = require("tslib");
const base_1 = require("../../base");
const types_1 = require("../../../lib/types");
class LocationsForMove extends base_1.Base {
    static all(_a) {
        var { session, fulfillment_order_id = null } = _a, otherArgs = tslib_1.__rest(_a, ["session", "fulfillment_order_id"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = yield this.baseFind({
                session: session,
                urlIds: { "fulfillment_order_id": fulfillment_order_id },
                params: Object.assign({}, otherArgs),
            });
            return response;
        });
    }
}
exports.LocationsForMove = LocationsForMove;
LocationsForMove.API_VERSION = types_1.ApiVersion.October22;
LocationsForMove.NAME = 'locations_for_move';
LocationsForMove.PLURAL_NAME = 'locations_for_moves';
LocationsForMove.HAS_ONE = {};
LocationsForMove.HAS_MANY = {};
LocationsForMove.PATHS = [
    { "http_method": "get", "operation": "get", "ids": ["fulfillment_order_id"], "path": "fulfillment_orders/<fulfillment_order_id>/locations_for_move.json" }
];
//# sourceMappingURL=locations_for_move.js.map