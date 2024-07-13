import { Module } from '@nestjs/common';
import { UserPostsController } from './user-posts.controller';
import { UserPostsService } from './user-posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UserPosts } from './entities/user-posts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserPosts])],
  controllers: [UserPostsController],
  providers: [UserPostsService]
})
export class UserPostsModule {}
