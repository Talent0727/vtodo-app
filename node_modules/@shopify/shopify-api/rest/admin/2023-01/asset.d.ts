/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
interface DeleteArgs {
    session: Session;
    theme_id?: number | string | null;
    asset?: {
        [key: string]: unknown;
    } | null;
}
interface AllArgs {
    [key: string]: unknown;
    session: Session;
    theme_id?: number | string | null;
    fields?: unknown;
    asset?: {
        [key: string]: unknown;
    } | null;
}
export declare class Asset extends Base {
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
    protected static PRIMARY_KEY: string;
    static delete({ session, theme_id, asset }: DeleteArgs): Promise<unknown>;
    static all({ session, theme_id, fields, asset, ...otherArgs }: AllArgs): Promise<Asset[]>;
    attachment: string | null;
    checksum: string | null;
    content_type: string | null;
    created_at: string | null;
    key: string | null;
    public_url: string | null;
    size: number | null;
    theme_id: number | null;
    updated_at: string | null;
    value: string | null;
}
export {};
//# sourceMappingURL=asset.d.ts.map