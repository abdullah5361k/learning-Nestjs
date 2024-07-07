import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeormConfig } from './config/typeorm.config';
import { UserProfileModule } from './user-profile/user-profile.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),TypeOrmModule.forRoot(typeormConfig) ,UsersModule, UserProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
