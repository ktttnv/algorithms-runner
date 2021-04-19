import {Injectable, NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LocaleLabel } from "./schemas/locale-label.schema";
import {ILocaleLabel} from "./interfaces/locale-label.interface";
import {CreateLocaleLabelStringDto} from "./dto/createLocaleLabelStringDto";
import {UpdateLocaleLabelStringDto} from "./dto/updateLocaleLabelStringDto";

@Injectable()
export class LocaleLabelService {
    constructor(
        @InjectModel(LocaleLabel.name) private readonly localeLabelModel: Model<LocaleLabel>,
    ) {}

    public async findAll(): Promise<LocaleLabel[]> {
        return await this.localeLabelModel
            .find()
            .exec();
    }

    public async findOne(localeLabelID: string): Promise<LocaleLabel> {
        const localeLbl = await this.localeLabelModel
            .findById({ _id: localeLabelID }).exec();

        if (!localeLbl) {
            throw new NotFoundException(`Customer #${localeLabelID} not found`);
        }

        return localeLbl;
    }

    public async isExist(localeLabelName: string): Promise<Boolean> {
        const allLocaleLbl = await this.findAll();
        return allLocaleLbl.some(elem => elem.name === localeLabelName)
    }

    public async create(
        createLocaleLabelDto: CreateLocaleLabelStringDto,
    ): Promise<ILocaleLabel> {
        const newLocaleLbl = await new this.localeLabelModel(createLocaleLabelDto);
        return newLocaleLbl.save();
    }

    public async update(
        localeLabelId: string,
        updateLocaleLabelStringDto: UpdateLocaleLabelStringDto,
    ): Promise<ILocaleLabel> {
        const existingLocaleLbl = await this.localeLabelModel.findByIdAndUpdate(
            { _id: localeLabelId },
            updateLocaleLabelStringDto,
        );

        if (!existingLocaleLbl) {
            throw new NotFoundException(`Locale #${localeLabelId} not found`);
        }

        return existingLocaleLbl;
    }

    public async remove(localeLabelId: string): Promise<any> {
        const deletedLocaleLbl = await this.localeLabelModel.findByIdAndRemove(
            localeLabelId,
        );
        return deletedLocaleLbl;
    }
}