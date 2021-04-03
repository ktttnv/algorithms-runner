import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

@Schema()
export class Group extends Document {
    @Prop()
    name: string;

    @Prop()
    displayName: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);