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
interface DeleteArgs {
    session: Session;
    id: number | string;
}
interface CsrArgs {
    [key: string]: unknown;
    session: Session;
    id: number | string;
}
export declare class ApplePayCertificate extends Base {
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
    static find({ session, id }: FindArgs): Promise<ApplePayCertificate | null>;
    static delete({ session, id }: DeleteArgs): Promise<unknown>;
    static csr({ session, id, ...otherArgs }: CsrArgs): Promise<unknown>;
    id: number | null;
    merchant_id: string | null;
    status: string | null;
}
export {};
//# sourceMappingURL=apple_pay_certificate.d.ts.map