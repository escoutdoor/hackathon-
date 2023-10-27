import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { BrandDto } from './brand.dto'
import { returnBrandFields } from './brand-fields.object'

@Injectable()
export class BrandService {
	constructor(private prisma: PrismaService) {}

	async brandById(id: string) {
		return await this.prisma.brand.findUnique({
			where: {
				id,
			},
			select: returnBrandFields,
		})
	}

	async createBrand(dto: BrandDto) {
		return await this.prisma.brand.create({
			data: dto,
		})
	}

	async getSimilarById(id: string) {
		const brand = await this.brandById(id)

		return await this.prisma.brand.findMany({
			where: {
				categories: {
					hasSome: brand.categories,
				},
				name: {
					contains: brand.name,
					mode: 'insensitive',
				},
				id: {
					not: id,
				},
			},
			take: 24,
			select: returnBrandFields,
		})
	}
}
