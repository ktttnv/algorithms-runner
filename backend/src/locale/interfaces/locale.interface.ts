import { Document } from 'mongoose';

export interface ILocale extends Document {
    readonly name: string;
    readonly value: string;
}