import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CategoryDto } from './category.dto'
import { returnCategoryFields } from './category-fields.object'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async categoryById(id: string) {
		return await this.prisma.category.findUnique({
			where: {
				id: id,
			},
			select: returnCategoryFields,
		})
	}

	async createCategory(category: CategoryDto) {
		return await this.prisma.category.create({
			data: category,
		})
	}

	async getAll() {
		return await this.prisma.category.findMany({
			select: returnCategoryFields,
		})
	}
}
