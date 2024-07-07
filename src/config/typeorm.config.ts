import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserProfile } from "src/user-profile/entites/user-profile.entity";
import { User } from "src/users/entities/user.entity";

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "testings",
    entities: [User, UserProfile],
    synchronize: true
}