import { Body, Controller, Param, Post } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileDto } from './dto/user-profile.dto';

@Controller('user-profile')
export class UserProfileController {

    constructor(private userProfileService: UserProfileService){}

    @Post(":id")
    createUserProfile(@Param("id") id: number,  @Body() userProfile: UserProfileDto) {
        return this.userProfileService.createProfile(id, userProfile);
    }

}
