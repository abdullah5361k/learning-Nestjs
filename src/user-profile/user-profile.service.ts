import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './entites/user-profile.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UserProfileService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,@InjectRepository(UserProfile) private userProfileRepository : Repository<UserProfile>){}


    async createProfile(userId: number, userBio : any) {
        const user = await this.userRepository.findOneBy({id: userId});
        console.log("User ", user);
        if(!user) throw new NotFoundException("User not found");
        const userProfile =  this.userProfileRepository.create(userBio);
        console.log("User  Profile ", userProfile);
        await this.userProfileRepository.save(userProfile);
        return {
            ...user,
            ...userProfile
        }
    }

}
