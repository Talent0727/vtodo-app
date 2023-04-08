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
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    limit?: unknown;
    page_info?: unknown;
}
interface CurrentArgs {
    [key: string]: unknown;
    session: Session;
}
export declare class User extends Base {
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
    static find({ session, id }: FindArgs): Promise<User | null>;
    static all({ session, limit, page_info, ...otherArgs }: AllArgs): Promise<User[]>;
    static current({ session, ...otherArgs }: CurrentArgs): Promise<unknown>;
    account_owner: boolean | null;
    bio: string | null;
    email: string | null;
    first_name: string | null;
    id: number | null;
    im: string | null;
    last_name: string | null;
    locale: string | null;
    permissions: string[] | null;
    phone: string | null;
    receive_announcements: number | null;
    screen_name: string | null;
    url: string | null;
    user_type: string | null;
}
export {};
//# sourceMappingURL=user.d.ts.map