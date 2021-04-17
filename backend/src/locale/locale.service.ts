import {Injectable, NotFoundException} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Locale } from "./schemas/locale.schema";
import {ILocale} from "./interfaces/locale.interface";
import {CreateLocaleStringDto} from "./dto/createLocaleStringDto";
import {UpdateLocaleStringDto} from "./dto/updateLocaleStringDto";

@Injectable()
export class LocaleService {
    constructor(
        @InjectModel(Locale.name) private readonly localeModel: Model<Locale>,
    ) {}

    public async findAll(): Promise<Locale[]> {
        return await this.localeModel
            .find()
            .exec();
    }

    public async findOne(localeID: string): Promise<Locale> {
        const locale = await this.localeModel
            .findById({ _id: localeID })
            .populate('organization')
            .exec();

        if (!locale) {
            throw new NotFoundException(`Customer #${localeID} not found`);
        }

        return locale;
    }

    public async isExist(localeName: string): Promise<Boolean> {
        const allLocales = await this.findAll();
        return allLocales.some(elem => elem.name === localeName)
    }

    public async create(
        createLocaleDto: CreateLocaleStringDto,
    ): Promise<ILocale> {
        const newLocale = await new this.localeModel(createLocaleDto);
        return newLocale.save();
    }

    public async update(
        localeId: string,
        updateGroupDto: UpdateLocaleStringDto,
    ): Promise<ILocale> {
        const existingLocale = await this.localeModel.findByIdAndUpdate(
            { _id: localeId },
            updateGroupDto,
        );

        if (!existingLocale) {
            throw new NotFoundException(`Locale #${localeId} not found`);
        }

        return existingLocale;
    }

    public async remove(localeId: string): Promise<any> {
        const deletedLocale = await this.localeModel.findByIdAndRemove(
            localeId,
        );
        return deletedLocale;
    }
}