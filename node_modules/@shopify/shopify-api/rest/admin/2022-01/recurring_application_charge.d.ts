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
    fields?: unknown;
}
interface DeleteArgs {
    session: Session;
    id: number | string;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    since_id?: unknown;
    fields?: unknown;
}
interface CustomizeArgs {
    [key: string]: unknown;
    body?: {
        [key: string]: unknown;
    } | null;
}
export declare class RecurringApplicationCharge extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<RecurringApplicationCharge | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, since_id, fields, ...otherArgs }: AllArgs): Promise<RecurringApplicationCharge[]>;
    customize({ body, ...otherArgs }: CustomizeArgs): Promise<unknown>;
    activated_on: string | null;
    billing_on: string | null;
    cancelled_on: string | null;
    capped_amount: string | number | null;
    confirmation_url: string | null;
    created_at: string | null;
    id: number | null;
    name: string | null;
    price: string | number | null;
    return_url: string | null;
    status: string | null;
    terms: string | null;
    test: boolean | null;
    trial_days: number | null;
    trial_ends_on: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=recurring_application_charge.d.ts.map