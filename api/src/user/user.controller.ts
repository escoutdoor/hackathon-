import {
	Body,
	Controller,
	Post,
	UsePipes,
	ValidationPipe,
	Get,
	Put,
	HttpCode,
	Patch,
	Param,
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserDto } from './user.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: string) {
		return await this.userService.getProfileById(id)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Auth()
	@Put('profile')
	async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return await this.userService.updateProfile(id, dto)
	}

	@Auth()
	@HttpCode(200)
	@Patch('profile/favorites/:discountId')
	async toggleFavorites(
		@CurrentUser('id') id: string,
		@Param('discountId') discountId: string
	) {
		return await this.userService.toggleFavorite(id, discountId)
	}
}
