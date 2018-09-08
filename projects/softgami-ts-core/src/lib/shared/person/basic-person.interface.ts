import { Country, Gender } from 'softgami-ts-core';

export interface BasicPerson {
    name: string;
    surname?: string;
    description?: string;
    gender?: Gender;
    birthDate?: Date;
    deathDate?: Date;
    birthPlace?: Country;
    nationality?: Country;
    url?: string;
    image?: string;
    createdAt?: Date;
    lastUpdate?: Date;
}
