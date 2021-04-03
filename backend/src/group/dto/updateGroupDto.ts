import {CreateGroupDto} from "./createGroupDto";
import {PartialType} from "@nestjs/mapped-types";

export class UpdateGroupDto extends PartialType(CreateGroupDto) {}