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
}
export declare class Policy extends Base {
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
    static all({ session, ...otherArgs }: AllArgs): Promise<Policy[]>;
    body: string | null;
    created_at: string | null;
    handle: string | null;
    title: string | null;
    updated_at: string | null;
    url: string | null;
}
export {};
//# sourceMappingURL=policy.d.ts.map