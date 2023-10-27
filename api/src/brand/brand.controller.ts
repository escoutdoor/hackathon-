import {
	Controller,
	Param,
	Get,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
	HttpCode,
} from '@nestjs/common'
import { BrandService } from './brand.service'
import { BrandDto } from './brand.dto'

@Controller('brands')
export class BrandController {
	constructor(private readonly brandService: BrandService) {}

	@Get(':id')
	async brandById(@Param('id') id: string) {
		return await this.brandService.brandById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('')
	async createBrand(@Body() dto: BrandDto) {
		return await this.brandService.createBrand(dto)
	}

	@Get('/similar/:id')
	async getSimilarById(@Param('id') id: string) {
		return await this.brandService.getSimilarById(id)
	}
}
