import { Document } from 'mongoose';

export interface ILocale extends Document {
    readonly value: string;
}