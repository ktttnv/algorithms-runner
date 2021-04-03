import {Injectable, NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Group} from "./schemas/group.schema";
import {IGroup} from "./interfaces/group.interface";
import {CreateGroupDto} from "./dto/createGroupDto";
import {UpdateGroupDto} from "./dto/updateGroupDto";

@Injectable()
export class GroupService {
    constructor(
        @InjectModel(Group.name) private readonly groupModel: Model<Group>,
    ) {}

    public async findAll(): Promise<Group[]> {
        return await this.groupModel
            .find()
            .exec();
    }

    public async findOne(customerId: string): Promise<Group> {
        const customer = await this.groupModel
            .findById({ _id: customerId })
            .populate('organization')
            .exec();

        if (!customer) {
            throw new NotFoundException(`Customer #${customerId} not found`);
        }

        return customer;
    }

    public async create(
        createGroupDto: CreateGroupDto,
    ): Promise<IGroup> {
        const newGroup = await new this.groupModel(createGroupDto);
        return newGroup.save();
    }

    public async update(
        groupId: string,
        updateGroupDto: UpdateGroupDto,
    ): Promise<IGroup> {
        const existingGroup = await this.groupModel.findByIdAndUpdate(
            { _id: groupId },
            updateGroupDto,
        );

        if (!existingGroup) {
            throw new NotFoundException(`Customer #${groupId} not found`);
        }

        return existingGroup;
    }

    public async remove(groupId: string): Promise<any> {
        const deletedGroup = await this.groupModel.findByIdAndRemove(
            groupId,
        );
        return deletedGroup;
    }
}
