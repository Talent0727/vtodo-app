/***********************************************************************************************************************
* This file is auto-generated. If you have an issue, please create a GitHub issue.                                     *
***********************************************************************************************************************/
import { Base } from '../../base';
import { ResourcePath } from '../../types';
import { Session } from '../../../lib/session/session';
import { ApiVersion } from '../../../lib/types';
import { Image } from './image';
interface FindArgs {
    session: Session;
    id: number | string;
    fields?: unknown;
}
interface ProductsArgs {
    [key: string]: unknown;
    session: Session;
    id: number | string;
    limit?: unknown;
}
export declare class Collection extends Base {
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
    static find({ session, id, fields }: FindArgs): Promise<Collection | null>;
    static products({ session, id, limit, ...otherArgs }: ProductsArgs): Promise<unknown>;
    title: string | null;
    body_html: string | null;
    handle: string | null;
    id: number | null;
    image: Image | null | {
        [key: string]: any;
    };
    published_at: string | null;
    published_scope: string | null;
    sort_order: string | null;
    template_suffix: string | null;
    updated_at: string | null;
}
export {};
//# sourceMappingURL=collection.d.ts.map