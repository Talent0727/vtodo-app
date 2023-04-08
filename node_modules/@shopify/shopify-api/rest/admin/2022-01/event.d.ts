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
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    order_id?: number | string | null;
    product_id?: number | string | null;
    limit?: unknown;
    since_id?: unknown;
    created_at_min?: unknown;
    created_at_max?: unknown;
    filter?: unknown;
    verb?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    created_at_min?: unknown;
    created_at_max?: unknown;
}
export declare class Event extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Event | null>;
    static all({ session, order_id, product_id, limit, since_id, created_at_min, created_at_max, filter, verb, fields, ...otherArgs }: AllArgs): Promise<Event[]>;
    static count({ session, created_at_min, created_at_max, ...otherArgs }: CountArgs): Promise<unknown>;
    arguments: string | null;
    body: string | null;
    created_at: string | null;
    description: string | null;
    id: number | null;
    message: string | null;
    path: string | null;
    subject_id: number | null;
    subject_type: string | null;
    verb: string | null;
}
export {};
//# sourceMappingURL=event.d.ts.map