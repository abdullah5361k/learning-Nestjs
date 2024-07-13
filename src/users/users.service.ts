import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>){}

    async createUser(user: CreateUserDto) {
        const newUser = this.userRepository.create(user);
        return await this.userRepository.save(newUser);
    }

    async getUser() {
        const users = await this.userRepository.find({relations: ["profile", "posts"]});
        console.log("Users ", users);
        return users;
    }

    async deleteUser(id: string) {
       const deletedUser = await this.userRepository.delete(id); 
       if(!deletedUser.affected) {
        throw new NotFoundException("User not found");
       }
    }

}
