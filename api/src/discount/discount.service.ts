import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { DiscountDto } from './discount.dto'
import { returnDiscountFields } from './discount-fields.object'

@Injectable()
export class DiscountService {
	constructor(private prisma: PrismaService) {}

	async discountById(id: string) {
		return await this.prisma.discount.findUnique({
			where: { id },
			select: returnDiscountFields,
		})
	}

	async create(dto: DiscountDto) {
		return await this.prisma.discount.create({
			data: dto,
		})
	}
}
