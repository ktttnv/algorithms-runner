import { Document } from 'mongoose';

export interface ILocaleLabel extends Document {
    readonly name: string;
    readonly value: string;
}