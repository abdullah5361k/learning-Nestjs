import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { UserPosts } from './entities/user-posts.entity';

@Injectable()
export class UserPostsService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>, 
    @InjectRepository(UserPosts) private userPostRepository: Repository<UserPosts>){}

    async createPost(id: number, title: string) {
        const user = await this.userRepository.findOne({where: {id: id}});
        if(!user) throw new NotFoundException("User not found");
        const userpost = this.userPostRepository.create({title: title, user: user});
        console.log("User Post ", userpost);
        await this.userPostRepository.save(userpost);
        return {
            message: "Post created successfully"
        }
    }

    async getPosts(id: number) {
        const user = await this.userPostRepository.find({where: {user: {id}}});
        if(!user.length) return {message: "User does not have any post"};
        console.log("U ", user);
        return user;
    }

    async deletePost(id: number) {
        const deletedPost = await this.userPostRepository.delete(id);
        console.log("Deleted post ", deletedPost);
        if(!deletedPost.affected) throw new BadRequestException("Post not deleted");
        return {message: "Post deleted successfully"};
    }

}
