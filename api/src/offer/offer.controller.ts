import {
	Controller,
	Body,
	Post,
	UsePipes,
	ValidationPipe,
	Get,
	Param,
	HttpCode,
} from '@nestjs/common'
import { OfferService } from './offer.service'
import { OfferDto } from './offer.dto'

@Controller('offers')
export class OfferController {
	constructor(private readonly offerService: OfferService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('')
	async createOffer(@Body() dto: OfferDto) {
		return await this.offerService.createOffer(dto)
	}

	@Get(':id')
	async offerById(@Param('id') id: string) {
		return await this.offerService.offerById(id)
	}
}
