/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface FindArgs {
    session: Session;
    id: number | string;
    order_id?: number | string | null;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
    order_id?: number | string | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    order_id?: number | string | null;
}
export declare class OrderRisk extends Base {
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
    protected static getJsonBodyName(): string;
    static find({ session, id, order_id }: FindArgs): Promise<OrderRisk | null>;
    static delete({ session, id, order_id }: DeleteArgs): Promise<unknown>;
    static all({ session, order_id, ...otherArgs }: AllArgs): Promise<OrderRisk[]>;
    cause_cancel: boolean | null;
    checkout_id: number | null;
    display: boolean | null;
    id: number | null;
    merchant_message: string | null;
    message: string | null;
    order_id: number | null;
    recommendation: string | null;
    score: number | null;
    source: string | null;
}
export {};
//# sourceMappingURL=order_risk.d.ts.map