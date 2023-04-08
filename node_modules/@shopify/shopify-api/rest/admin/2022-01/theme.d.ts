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
    fields?: unknown;
}
export declare class Theme extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Theme | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static all({ session, fields, ...otherArgs }: AllArgs): Promise<Theme[]>;
    created_at: string | null;
    id: number | null;
    name: string | null;
    previewable: boolean | null;
    processing: boolean | null;
    role: string | null;
    theme_store_id: number | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=theme.d.ts.map