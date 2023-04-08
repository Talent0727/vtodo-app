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
export declare class DeprecatedApiCall extends Base {
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
    static all({ session, ...otherArgs }: AllArgs): Promise<DeprecatedApiCall[]>;
    data_updated_at: string | null;
    deprecated_api_calls: {
        [key: string]: unknown;
    }[] | null;
}
export {};
//# sourceMappingURL=deprecated_api_call.d.ts.map