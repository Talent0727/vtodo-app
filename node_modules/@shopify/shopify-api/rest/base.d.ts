import { Session } from '../lib/session/session';
import { PageInfoParams, RestRequestReturn } from '../lib/clients/rest/types';
import { RestClient } from '../lib/clients/rest/rest_client';
import { ConfigInterface } from '../lib/base-types';
import { IdSet, Body, ResourcePath, ParamSet } from './types';
interface BaseFindArgs {
    session: Session;
    params?: ParamSet;
    urlIds: IdSet;
}
interface BaseConstructorArgs {
    session: Session;
    fromData?: Body | null;
}
interface SaveArgs {
    update?: boolean;
}
interface RequestArgs extends BaseFindArgs {
    http_method: string;
    operation: string;
    body?: Body | null;
    entity?: Base | null;
}
interface GetPathArgs {
    http_method: string;
    operation: string;
    urlIds: IdSet;
    entity?: Base | null;
}
interface SetClassPropertiesArgs {
    CLIENT: typeof RestClient;
    CONFIG: ConfigInterface;
}
export declare class Base {
    #private;
    [key: string]: any;
    static NEXT_PAGE_INFO: PageInfoParams | undefined;
    static PREV_PAGE_INFO: PageInfoParams | undefined;
    static CLIENT: typeof RestClient;
    static CONFIG: ConfigInterface;
    static API_VERSION: string;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static PRIMARY_KEY: string;
    protected static CUSTOM_PREFIX: string | null;
    protected static READ_ONLY_ATTRIBUTES: string[];
    protected static HAS_ONE: {
        [attribute: string]: typeof Base;
    };
    protected static HAS_MANY: {
        [attribute: string]: typeof Base;
    };
    protected static PATHS: ResourcePath[];
    static setClassProperties({ CLIENT, CONFIG }: SetClassPropertiesArgs): void;
    protected static baseFind<T extends Base = Base>({ session, urlIds, params, }: BaseFindArgs): Promise<T[]>;
    protected static request<T = unknown>({ session, http_method, operation, urlIds, params, body, entity, }: RequestArgs): Promise<RestRequestReturn<T>>;
    protected static getJsonBodyName(): string;
    protected static getPath({ http_method, operation, urlIds, entity, }: GetPathArgs): string;
    protected static createInstancesFromResponse<T extends Base = Base>(session: Session, data: Body): T[];
    protected static createInstance<T extends Base = Base>(session: Session, data: Body, prevInstance?: T): T;
    get session(): Session;
    constructor({ session, fromData }: BaseConstructorArgs);
    save({ update }?: SaveArgs): Promise<void>;
    saveAndUpdate(): Promise<void>;
    delete(): Promise<void>;
    serialize(saving?: boolean): Body;
    toJSON(): Body;
    request<T = unknown>(args: RequestArgs): Promise<RestRequestReturn<T>>;
    protected setData(data: Body): void;
    private resource;
    private serializeSubAttribute;
}
export {};
//# sourceMappingURL=base.d.ts.map