import {
	Controller,
	Get,
	Param,
	HttpCode,
	UsePipes,
	ValidationPipe,
	Post,
	Body,
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryDto } from './category.dto'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Get(':id')
	async categoryById(@Param('id') id: string) {
		return await this.categoryService.categoryById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('')
	async createCategory(@Body() category: CategoryDto) {
		return await this.categoryService.createCategory(category)
	}

	@Get('')
	async getAll() {
		return await this.categoryService.getAll()
	}
}
