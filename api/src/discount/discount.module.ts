import { Module } from '@nestjs/common'
import { DiscountService } from './discount.service'
import { DiscountController } from './discount.controller'
import { PrismaService } from 'src/prisma.service'
import { getAllDto } from './discount.dto'

@Module({
	controllers: [DiscountController],
	providers: [DiscountService, PrismaService],
})
export class DiscountModule {
	async getAll(dto: getAllDto) {}

	async
}
