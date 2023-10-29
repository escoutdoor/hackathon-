import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { OfferDto } from './offer.dto'

@Injectable()
export class OfferService {
	constructor(private prisma: PrismaService) {}

	async offerById(id: string) {
		return await this.prisma.offerType.findUnique({
			where: {
				id: id,
			},
		})
	}

	async createOffer(offer: OfferDto) {
		return await this.prisma.offerType.create({
			data: offer,
		})
	}
}
