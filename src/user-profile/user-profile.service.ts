import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './entites/user-profile.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class UserProfileService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>,@InjectRepository(UserProfile) private userProfileRepository : Repository<UserProfile>){}


    async createProfile(userId: number, userBio : any) {
        const user = await this.userRepository.findOne({where:{id:userId}, relations: ['profile']});
        console.log("User ", user);
        // Check if user does not found
        if(!user) throw new NotFoundException("User not found");
        // Check if user already have profile
        if(user.profile) throw new ConflictException("User already have profile");
        userBio.user = user.id;
        const userProfile =  this.userProfileRepository.create(userBio);
        console.log("User profile ", userProfile);
        await this.userProfileRepository.save(userProfile);
        delete user.profile;
        return {
            ...user,
            userProfile
        }
    }
    

}
