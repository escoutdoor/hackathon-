import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { DiscountModule } from './discount/discount.module'

@Module({
	imports: [AuthModule, UserModule, DiscountModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
