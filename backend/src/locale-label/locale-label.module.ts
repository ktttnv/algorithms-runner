import { Module } from '@nestjs/common';
import { LocaleLabelController } from './locale-label.controller';
import { LocaleLabelService } from './locale-label.service';
import {MongooseModule} from "@nestjs/mongoose";
import {LocaleLabel, LocaleLabelSchema} from "./schemas/locale-label.schema";

@Module({
  imports: [MongooseModule.forFeature([{
    name: LocaleLabel.name, schema: LocaleLabelSchema
  }])],
  controllers: [LocaleLabelController],
  providers: [LocaleLabelService]
})
export class LocaleLabelModule {}
