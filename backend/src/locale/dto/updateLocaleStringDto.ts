import {CreateLocaleStringDto} from "./createLocaleStringDto";
import {PartialType} from "@nestjs/mapped-types";

export class UpdateLocaleStringDto extends PartialType(CreateLocaleStringDto) {}