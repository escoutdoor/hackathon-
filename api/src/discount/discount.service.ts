import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { DiscountDto } from './discount.dto'

@Injectable()
export class DiscountService {
	constructor(private prisma: PrismaService) {}

	async discountById(id: string) {
		return await this.prisma.discount.findUnique({
			where: { id },
		})
	}

	async create(dto: DiscountDto) {
		return await this.prisma.discount.create({
			data: dto,
		})
	}
}
