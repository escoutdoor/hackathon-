import { IsString } from 'class-validator'

export class OfferDto {
	@IsString()
	name: string

	@IsString()
	slug: string
}
