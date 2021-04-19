import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class LocaleLabel extends Document {
    @Prop()
    name: string;

    @Prop()
    value: string;
}

export const LocaleLabelSchema = SchemaFactory.createForClass(LocaleLabel);