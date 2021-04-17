import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Locale extends Document {
    @Prop()
    name: string;

    @Prop()
    value: string;
}

export const LocaleSchema = SchemaFactory.createForClass(Locale);