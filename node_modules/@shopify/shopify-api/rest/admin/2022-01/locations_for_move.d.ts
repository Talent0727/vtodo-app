/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    fulfillment_order_id?: number | string | null;
}
export declare class LocationsForMove extends Base {
    static API_VERSION: ApiVersion;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static HAS_ONE: {
        [key: string]: typeof Base;
    };
    protected static HAS_MANY: {
        [key: string]: typeof Base;
    };
    protected static PATHS: ResourcePath[];
    static all({ session, fulfillment_order_id, ...otherArgs }: AllArgs): Promise<LocationsForMove[]>;
    locations_for_move: {
        [key: string]: unknown;
    }[] | null;
}
export {};
//# sourceMappingURL=locations_for_move.d.ts.map