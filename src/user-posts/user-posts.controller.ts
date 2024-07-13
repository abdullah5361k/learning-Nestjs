import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UserPostsService } from './user-posts.service';

@Controller('user-posts')
export class UserPostsController {
    constructor(private UserPostService: UserPostsService){}

    @Post()
    createPost(@Body() body: any) {
        console.log("Id ",body.id);
        console.log("Title ", body.title);
        return this.UserPostService.createPost(body.id, body.title);
    }

    @Get()
    getUserPosts() {
        return this.UserPostService.getPosts(4);
    }

    @Delete()
    deleteUserPost() {
        return this.UserPostService.deletePost(3);
    }
}
