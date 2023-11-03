import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { BrandDto } from './brand.dto'
import { returnBrandFields } from './brand-fields.object'
import { Prisma } from '@prisma/client'
import { returnDiscountFields } from 'src/discount/discount-fields.object'

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

	async getAll() {
		return await this.prisma.brand.findMany({
			select: {
				name: true,
			},
		})
	}
}
