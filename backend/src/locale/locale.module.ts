import { Module } from '@nestjs/common';
import { LocaleController } from './locale.controller';
import { LocaleService } from './locale.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Locale, LocaleSchema} from "./schemas/locale.schema";

@Module({
  imports: [MongooseModule.forFeature([
    {name: Locale.name, schema: LocaleSchema}
  ])],
  controllers: [LocaleController],
  providers: [LocaleService]
})
export class LocaleModule {}
