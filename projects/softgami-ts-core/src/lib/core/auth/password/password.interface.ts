export interface Password {
    hash: string;
    salt: string;
    algorithm: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
