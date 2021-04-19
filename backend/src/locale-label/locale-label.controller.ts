import {Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res} from '@nestjs/common';
import {LocaleLabelService} from "./locale-label.service";
import {CreateLocaleLabelStringDto} from "./dto/createLocaleLabelStringDto";
import {UpdateLocaleLabelStringDto} from "./dto/updateLocaleLabelStringDto";

@Controller('locale-label')
export class LocaleLabelController {
    constructor(private localeLblService: LocaleLabelService) {}

    @Get()
    public async getAllLocaleLabels(
        @Res() res,
    ) {
        const labels = await this.localeLblService.findAll();
        return res.status(HttpStatus.OK).json(labels);
    }

    @Get('/:id')
    public async getLocaleLabel(
        @Res() res,
        @Param('id') localeLblId: string,
    ) {
        const label = await this.localeLblService.findOne(
            localeLblId,
        );
        if (!label) {
            throw new NotFoundException('Labels does not exist!');
        }
        return res.status(HttpStatus.OK).json(label);
    }

    @Post()
    public async addLocaleLabel(
        @Res() res,
        @Body() createLocaleLabelDto: CreateLocaleLabelStringDto,
    ) {
        try {
            const label = await this.localeLblService.create(
                createLocaleLabelDto,
            );
            return res.status(HttpStatus.OK).json({
                message: 'Label has been created successfully',
                label,
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Label not created!',
                status: 400,
            });
        }
    }

    @Put('/:id')
    public async updateLocaleLabel(
        @Res() res,
        @Param('id') localeLblId: string,
        @Body() updateLocaleLabelDto: UpdateLocaleLabelStringDto,
    ) {
        try {
            const label = await this.localeLblService.update(
                localeLblId,
                updateLocaleLabelDto,
            );
            if (!label) {
                throw new NotFoundException('Group does not exist!');
            }
            return res.status(HttpStatus.OK).json({
                message: 'Group has been successfully updated',
                label,
            });
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json({
                message: 'Error: Group not updated!',
                status: 400,
            });
        }
    }

    @Delete('/:id')
    public async deleteLocaleLabel(
        @Res() res,
        @Param('id') localeLblId: string,
    ) {
        if (!localeLblId) {
            throw new NotFoundException('Label ID does not exist');
        }

        const label = await this.localeLblService.remove(localeLblId);

        if (!label) {
            throw new NotFoundException('Group does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Label has been deleted',
            label,
        });
    }
}
