import {
	Controller,
	Post,
	ValidationPipe,
	UsePipes,
	HttpCode,
	Body,
	Get,
	Param,
} from '@nestjs/common'
import { DiscountService } from './discount.service'
import { DiscountDto } from './discount.dto'

@Controller('discounts')
export class DiscountController {
	constructor(private readonly discountService: DiscountService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('')
	async create(@Body() dto: DiscountDto) {
		return await this.discountService.create(dto)
	}

	@Get(':id')
	async discountById(@Param('id') id: string) {
		return await this.discountService.discountById(id)
	}
}
