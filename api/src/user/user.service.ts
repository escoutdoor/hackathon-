import {
	Injectable,
	BadRequestException,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserDto } from './user.dto'
import { hash } from 'argon2'
import { returnDiscountFields } from '../discount/discount-fields.object'
import { returnUserFields } from './user-fields.object'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getProfileById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id },
			select: {
				...returnUserFields,
				favorites: {
					include: {
						discount: {
							select: returnDiscountFields,
						},
					},
				},
				student: true,
			},
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		return user
	}

	async updateProfile(id: string, dto: UserDto) {
		const isSameUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		})

		if (isSameUser && isSameUser.id !== id) {
			throw new BadRequestException('Email is already taken')
		}

		const user = await this.getProfileById(id)

		return await this.prisma.user.update({
			where: { id },
			data: {
				firstName: dto.firstName,
				lastName: dto.lastName,
				email: dto.email,
				password: dto.password
					? await hash(dto.password)
					: user.password,
				avatarPath: dto.avatarPath,
				address: {
					[user.address ? 'update' : 'create']: {
						country: dto.address?.country,
						city: dto.address?.city,
						street: dto.address?.street,
						phone: dto.address?.phone,
					},
				},
			},
			select: returnUserFields,
		})
	}

	async toggleFavorite(id: string, discountId: string) {
		const user = await this.getProfileById(id)

		const isExists = user.favorites.some(
			discount => discount.discountId === discountId
		)

		return await this.prisma.user.update({
			where: { id: user.id },
			data: {
				favorites: {
					[isExists ? 'deleteMany' : 'create']: {
						discountId,
					},
				},
			},
			select: returnUserFields,
		})
	}
}
