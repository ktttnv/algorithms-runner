import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document, Types} from "mongoose";
import {LocaleLabel} from "../../locale-label/schemas/locale-label.schema";

@Schema()
export class Locale extends Document {

    @Prop({ type: [Types.ObjectId], ref: 'LocaleLabel' })
    localeLabel: string;

    @Prop()
    value: string;
}

export const LocaleSchema = SchemaFactory.createForClass(Locale);