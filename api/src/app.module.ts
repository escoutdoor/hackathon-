import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { DiscountModule } from './discount/discount.module'
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';
import { OfferModule } from './offer/offer.module';

@Module({
	imports: [AuthModule, UserModule, DiscountModule, BrandModule, CategoryModule, OfferModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
