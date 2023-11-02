import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { DiscountDto, GetAllDto } from './discount.dto'
import { returnDiscountFields } from './discount-fields.object'
import { Prisma } from '@prisma/client'

@Injectable()
export class DiscountService {
	constructor(private prisma: PrismaService) {}

	async getAll(dto: GetAllDto) {
		const { searchTerm, limit, category, brands, sortBy, offerTypes } = dto

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

		const filterOptions: Prisma.DiscountWhereInput = searchTerm
			? {
					OR: [
						{
							name: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
						{
							brand: {
								categoryName: {
									contains: searchTerm,
									mode: 'insensitive',
								},
							},
						},
						{
							brandName: {
								contains: searchTerm,
								mode: 'insensitive',
							},
						},
					],
			  }
			: {
					brand: {
						name: {
							in: brands,
						},
						category: {
							slug: category,
						},
						offerType: {
							slug: {
								in: offerTypes,
							},
						},
					},
			  }

		const discounts = await this.prisma.discount.findMany({
			where: filterOptions,
			select: {
				...returnDiscountFields,
			},
			orderBy,
			take: +limit || 10,
		})

		return {
			discounts,
			length: discounts.length,
		}
	}

	async discountById(id: string) {
		return await this.prisma.discount.findUnique({
			where: { id },
			select: {
				...returnDiscountFields,
			},
		})
	}

	async create(dto: DiscountDto) {
		return await this.prisma.discount.create({
			data: dto,
		})
	}
}
