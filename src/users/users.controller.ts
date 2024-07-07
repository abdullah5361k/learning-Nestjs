import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}
    @Get()
    getUsers() {
        return this.userService.getUser();
    }

    @Post()
    createUser(@Body() userInfo: CreateUserDto) {
        return this.userService.createUser(userInfo);
    }

    @Delete(":id")
    deleteUser(@Param("id") id: string) {
        console.log("User id ", id);
        return this.userService.deleteUser(id);
    }

}
