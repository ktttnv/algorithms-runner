import {Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res} from '@nestjs/common';
import {LocaleService} from "./locale.service";
import {CreateLocaleStringDto} from "./dto/createLocaleStringDto";
import {UpdateLocaleStringDto} from "./dto/updateLocaleStringDto";

@Controller('locale')
export class LocaleController {

    constructor(private localeService: LocaleService) {
    }

    @Get()
    public async getAllLocale(
        @Res() res,
    ) {
        const locales = await this.localeService.findAll();
        return res.status(HttpStatus.OK).json(locales);
    }

    @Get('/:id')
    public async getLocale(
        @Res() res,
        @Param('id') localeId: string,
    ) {
        const locale = await this.localeService.findOne(
            localeId,
        );
        if (!locale) {
            throw new NotFoundException('Locale does not exist!');
        }
        return res.status(HttpStatus.OK).json(locale);
    }

    @Post()
    public async addLocale(
        @Res() res,
        @Body() createLocaleDto: CreateLocaleStringDto,
    ) {
        try {
            const locale = await this.localeService.create(
                createLocaleDto,
            );
            return res.status(HttpStatus.OK).json({
                message: 'Locale has been created successfully',
                locale,
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Locale not created!',
                status: 400,
            });
        }
    }

    @Put('/:id')
    public async updateLocale(
        @Res() res,
        @Param('id') localeId: string,
        @Body() updateLocaleDto: UpdateLocaleStringDto,
    ) {
        try {
            const locale = await this.localeService.update(
                localeId,
                updateLocaleDto,
            );
            if (!locale) {
                throw new NotFoundException('Locale does not exist!');
            }
            return res.status(HttpStatus.OK).json({
                message: 'locale has been successfully updated',
                locale,
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: locale not updated!',
                status: 400,
            });
        }
    }

    @Delete('/:id')
    public async deleteLocale(
        @Res() res,
        @Param('id') localeId: string,
    ) {
        if (!localeId) {
            throw new NotFoundException('locale ID does not exist');
        }

        const locale = await this.localeService.remove(localeId);

        if (!locale) {
            throw new NotFoundException('locale does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Locale has been deleted',
            locale,
        });
    }
}
