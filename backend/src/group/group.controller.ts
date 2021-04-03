import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    Post,
    Put,
    Res
} from '@nestjs/common';
import {GroupService} from "./group.service";
import {CreateGroupDto} from "./dto/createGroupDto";
import {UpdateGroupDto} from "./dto/updateGroupDto";

@Controller('group')
export class GroupController {

    constructor(private groupService: GroupService) {}

    @Get()
    public async getAllGroups(
        @Res() res,
    ) {
        const groups = await this.groupService.findAll();
        return res.status(HttpStatus.OK).json(groups);
    }

    @Get('/:id')
    public async getGroup(
        @Res() res,
        @Param('id') groupId: string,
    ) {
        const group = await this.groupService.findOne(
            groupId,
        );
        if (!group) {
            throw new NotFoundException('Group does not exist!');
        }
        return res.status(HttpStatus.OK).json(group);
    }

    @Post()
    public async addGroup(
        @Res() res,
        @Body() createGroupDto: CreateGroupDto,
    ) {
        try {
            const group = await this.groupService.create(
                createGroupDto,
            );
            return res.status(HttpStatus.OK).json({
                message: 'Group has been created successfully',
                group,
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Group not created!',
                status: 400,
            });
        }
    }

    @Put('/:id')
    public async updateGroup(
        @Res() res,
        @Param('id') groupId: string,
        @Body() updateGroupDto: UpdateGroupDto,
    ) {
        try {
            const group = await this.groupService.update(
                groupId,
                updateGroupDto,
            );
            if (!group) {
                throw new NotFoundException('Group does not exist!');
            }
            return res.status(HttpStatus.OK).json({
                message: 'Group has been successfully updated',
                group,
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Group not updated!',
                status: 400,
            });
        }
    }

    @Delete('/:id')
    public async deleteGroup(
        @Res() res,
        @Param('id') groupId: string,
    ) {
        if (!groupId) {
            throw new NotFoundException('Group ID does not exist');
        }

        const group = await this.groupService.remove(groupId);

        if (!group) {
            throw new NotFoundException('Group does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Group has been deleted',
            group,
        });
    }
}
