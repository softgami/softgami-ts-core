export interface BasicPassword {
    hash: string;
    salt: string;
    algorithm: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
