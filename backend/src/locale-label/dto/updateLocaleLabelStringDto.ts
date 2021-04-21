import {CreateLocaleLabelStringDto} from "./createLocaleLabelStringDto";
import {PartialType} from "@nestjs/mapped-types";

export class UpdateLocaleLabelStringDto extends PartialType(CreateLocaleLabelStringDto) {}