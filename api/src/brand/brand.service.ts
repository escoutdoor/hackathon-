import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { BrandDto, GetBrandsDto } from './brand.dto'
import { returnBrandFields } from './brand-fields.object'
import { EnumOfferType, Prisma } from '@prisma/client'

@Injectable()
export class BrandService {
	constructor(private prisma: PrismaService) {}

	async getAll(dto: GetBrandsDto) {
		const { sortBy, searchTerm } = dto

		const orderBy: Prisma.BrandOrderByWithRelationInput[] = []

		switch (sortBy) {
			case 'popularity':
				orderBy.push({
					createdAt: 'desc',
				})
				break
			case 'date':
				orderBy.push({
					createdAt: 'desc',
				})
				break
			default:
				orderBy.push({
					createdAt: 'desc',
				})
				break
		}

		const searchTermFilter: Prisma.BrandWhereInput = searchTerm
			? {
					OR: [
						{ name: { contains: searchTerm, mode: 'insensitive' } },
						{
							description: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
						{
							categories: {
								hasSome: [searchTerm],
							},
						},
						{
							offerType: {
								equals: searchTerm as EnumOfferType,
							},
						},
					],
			  }
			: {}

		const brands = await this.prisma.brand.findMany({
			where: searchTermFilter,
			orderBy,
			select: returnBrandFields,
			take: 24,
		})

		return {
			brands,
			length: brands.length,
		}
	}

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
