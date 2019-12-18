export interface JwtPayload {
    userId: string;
    roles:
    {
        appId: string;
        appAlias: string;
        appInstanceId: string;
        roleId: string;
        roleAlias: string;
    }[];
    iat?: number;
    exp?: number;
}
