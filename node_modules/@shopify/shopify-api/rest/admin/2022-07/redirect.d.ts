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
    limit?: unknown;
    since_id?: unknown;
    path?: unknown;
    target?: unknown;
    fields?: unknown;
}
interface CountArgs {
    [key: string]: unknown;
    session: Session;
    path?: unknown;
    target?: unknown;
}
export declare class Redirect extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Redirect | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, limit, since_id, path, target, fields, ...otherArgs }: AllArgs): Promise<Redirect[]>;
    static count({ session, path, target, ...otherArgs }: CountArgs): Promise<unknown>;
    id: number | null;
    path: string | null;
    target: string | null;
}
export {};
//# sourceMappingURL=redirect.d.ts.map